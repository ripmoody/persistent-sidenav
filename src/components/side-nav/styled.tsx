import { breakpoints } from '@/providers/navigation/constants/breakpoints'
import type { NavigationState } from '@/providers/navigation/navigation-reducer'
import styled from '@emotion/styled'

type SideNavProps = {
  context: NavigationState['context']
}

/**
 * The relative positioned container to allow the expand an collapse button to be visible and
 * on top of th sidenav content. It also conditionally shows/hides the icon button on hover
 * based on the button id. The width must be explicitly set because collapsed state is positioned absolutely.
 */
export const SideNavRelative = styled.div<SideNavProps>`
  position: relative;
  transition: width 200ms ease-in-out;
  width: ${({ context }) => (context.isCollapsed ? '4rem' : '22rem')};

  :hover #expand-collapse {
    opacity: 1;
    scale: 1;
  }

  @media (max-width: ${breakpoints.md}px) {
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    box-shadow: ${({ context }) =>
      context.isCollapsed ? 'none' : 'var(--shadows-2xl)'};
  }
`

/**
 * The side nav component container
 */
export const SideNav = styled.nav<SideNavProps>`
  transition: all 200ms ease-in-out;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: white;
  border-right: solid 1px var(--color-grey-100);
  padding: var(--space-4) var(--space-3);
  box-shadow: none;
  transform: translateX(
    ${({ context }) => (context.isHidden ? '-100%' : '0%')}
  );
  overflow-x: hidden; // Hides icons on collapse and expand. A little hacky cause transitions don't match up.
`

/**
 * The fixed header portion of the side nav. Contains off-board, hire, home
 */
export const SideNavHeader = styled.div`
  border-bottom: solid 1px var(--color-grey-100);
  padding: 0 0 var(--space-4) 0;
`

/**
 * The footer portion of the side nav that stays fixed to the bottom.
 */
export const SideNavFooter = styled.div`
  border-top: solid 1px var(--color-grey-100);
  padding: var(--space-4) 0 0 0;
  margin-top: var(--space-4);
`

/**
 * The main content portion of the side nav that overflow, scrolls, expands, and collapses
 */
export const SideNavMain = styled.div<SideNavProps>`
  position: relative;
  flex: 1;
  padding: ${({ context }) =>
    context.isCollapsed
      ? 'var(--space-4) 0'
      : 'var(--space-4) var(--space-1) var(--space-4) 0'};
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-grey-200);
    border-radius: 4px;
  }
`

/**
 * A generic unordered list for the side nav
 */
export const SideNavList = styled.ul<SideNavProps>`
  list-style: none;
  padding: 0 2px;
  margin: 0;
  display: flex;
  flex-direction: column;
  font-size: var(--type-size-md);
`
