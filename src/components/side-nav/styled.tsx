import { breakpoints } from '@/providers/navigation/constants/breakpoints'
import type { NavigationState } from '@/providers/navigation/navigation-reducer'
import styled from '@emotion/styled'

type SideNavProps = {
  context: NavigationState['context']
}

/**
 * The side nav component container
 */
export const SideNav = styled.nav<SideNavProps>`
  transition: all 200ms ease-in-out;
  display: flex;
  flex-direction: column;
  width: ${({ context }) =>
    context.isCollapsed ? 'var(--space-16)' : 'var(--space-80)'};
  background-color: white;
  border-right: solid 1px var(--color-grey-100);
  padding: var(--space-4) var(--space-3);
  box-shadow: none;
  transform: translateX(
    ${({ context }) => (context.isHidden ? '-100%' : '0%')}
  );
  overflow-x: hidden; // Hides icons on collapse and expand. A little hacky cause transitions don't match up.

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
 * The fixed header portion of the side nav. Contains off-board, hire, home
 */
export const SideNavHeader = styled.div`
  border-bottom: solid 1px var(--color-grey-100);
  padding: 0 0 var(--space-4) 0;
`

/**
 * The fixed footer portion of the side nav that stays fixed to the bottom.
 * Contains support, App Shop
 */
export const SideNavFooter = styled.div`
  border-top: solid 1px var(--color-grey-100);
  padding: var(--space-4) 0 0 0;
`

/**
 * The main content portion of the side nav that overflow, scrolls, expands, and collapses
 */
export const SideNavMain = styled.div`
  flex: 1;
  padding: var(--space-4) 0;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

/**
 * A generic unordered list for the side nav
 */
export const SideNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-0_5);
  font-size: var(--type-size-md);
`
