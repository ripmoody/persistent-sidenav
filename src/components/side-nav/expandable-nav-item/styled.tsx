import { ChevronRight } from '@/components/icons'
import { NavigationState } from '@/providers/navigation/navigation-reducer'
import styled from '@emotion/styled'
import { Fragment } from 'react'

type ExpandableNavItemProps = {
  isCollapsed: NavigationState['context']['isCollapsed']
  hasActiveChild?: boolean
  isNavItemExpanded?: boolean
}

export const ExpandableNavItemGroup = Fragment

export const ExpandableNavItem = styled.li<ExpandableNavItemProps>`
  position: relative;
  margin: var(--space-0_5) 0;

  ${({ isCollapsed, isNavItemExpanded, hasActiveChild }) =>
    !isCollapsed &&
    !isNavItemExpanded &&
    hasActiveChild &&
    `&::before {
      content: '';
      position: absolute;
      top: 4px;
      left: 4px;
      bottom: 4px;
      border-radius: var(--radius-base);
      width: var(--space-1);
      background-color: var(--color-yellow-400);
    }`}
`

export const ExpandableNavItemButton = styled.button<ExpandableNavItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-2);
  width: 100%;
  border: none;
  background: none;
  color: var(--color-text);
  gap: var(--space-3);
  font-size: var(--type-size-md);
  border-radius: var(--radius-base);
  line-height: 1;
  padding-left: ${({ isCollapsed }) =>
    isCollapsed ? 'var(--space-2)' : 'var(--space-5)'};
  background-color: ${({ hasActiveChild, isCollapsed, isNavItemExpanded }) => {
    if (hasActiveChild && !isCollapsed && isNavItemExpanded) {
      return 'white'
    }

    if (hasActiveChild && isCollapsed) {
      return 'var(--color-grey-50)'
    }

    if (hasActiveChild && !isCollapsed) {
      return 'var(--color-grey-50)'
    }
  }};

  &:hover {
    background-color: var(--color-grey-50);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-plum-300);
  }
`

export const ExpandableNavItemIcon = styled.span`
  min-width: var(--space-5);
  min-height: var(--space-5);
  width: var(--space-5);
  height: var(--space-5);
`

export const ExpandableNavItemLabel = styled.span<ExpandableNavItemProps>`
  line-height: 1;
  display: ${({ isCollapsed }) => (isCollapsed ? 'none' : 'block')};
  white-space: nowrap; // This is worrisome. Stops the text from stacking on expand.
`

export const ExpandableNavItemChevron = styled(
  ChevronRight,
)<ExpandableNavItemProps>`
  margin-left: auto;
  display: ${({ isCollapsed }) => (isCollapsed ? 'none' : 'block')};
  transition: transform 100ms ease-in-out;
  transform: ${({ isNavItemExpanded }) =>
    isNavItemExpanded ? 'rotate(90deg)' : 'rotate(0deg)'};
  color: var(--color-grey-600);
`

export const ExpandableSubNavList = styled.ul<ExpandableNavItemProps>`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  list-style: none;
  padding: 0 2px;
  padding-top: ${({ isCollapsed }) => (isCollapsed ? '0' : '2px')};
  margin: 0;
  opacity: ${({ isNavItemExpanded }) => (isNavItemExpanded ? '1' : '0')};
  pointer-events: ${({ isCollapsed }) => (isCollapsed ? 'none' : 'auto')};
  max-height: ${({ isNavItemExpanded, isCollapsed }) => {
    if (isCollapsed || !isNavItemExpanded) {
      return '0'
    }
    return '700px'
  }};
  transition: max-height 300ms ease-in-out;
  font-size: 15px; // booooooo, but the type size is too big for the subnav

  & > li:last-of-type {
    margin-bottom: var(--space-3);
  }
`
