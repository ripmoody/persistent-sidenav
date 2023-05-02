import { ArrowRight } from '@/components/icons'
import styled from '@emotion/styled'
import Link from 'next/link'

type NavItemProps = {
  /**
   * Whether or not the nav item is collapsed
   */
  isCollapsed: boolean
  /**
   * Whether or not the nav item is a subnav item
   */
  isSubNavItem?: boolean
}

export const FlatNavItem = styled.li<NavItemProps>`
  position: relative;

  &[aria-current='page'] button {
    background-color: var(--color-grey-50);

    &::before {
      content: '';
      position: absolute;
      top: 4px;
      left: 4px;
      bottom: 4px;
      border-radius: var(--radius-base);
      width: ${({ isCollapsed }) => (isCollapsed ? '0' : 'var(--space-1)')};
      background-color: ${({ isCollapsed }) =>
        isCollapsed ? 'transparent' : 'var(--color-yellow-400)'};
    }
  }
`

export const FlatNavItemLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`

export const FlatNavItemButton = styled.button<NavItemProps>`
  display: flex;
  align-items: center;
  padding: var(--space-2);
  width: 100%;
  border: none;
  background: none;
  color: var(--color-text);
  gap: var(--space-3);
  border-radius: var(--radius-base);
  line-height: 1;
  font-size: inherit;
  padding-left: ${({ isCollapsed, isSubNavItem }) => {
    if (!isCollapsed && isSubNavItem) {
      return 'var(--space-8)'
    }
    if (!isCollapsed && !isSubNavItem) {
      return 'var(--space-5)'
    }
    return 'var(--space-2)'
  }};
  &:hover {
    background-color: var(--color-grey-50);
  }
`

export const FlatNavItemIcon = styled.span`
  min-width: var(--space-5);
  min-height: var(--space-5);
`

export const FlatNavItemLabel = styled.span<NavItemProps>`
  font-size: inherit;
  line-height: 1.25;
  display: ${({ isCollapsed }) => (isCollapsed ? 'none' : 'block')};
  text-align: left;
`

export const ExpandableArrowIcon = styled(ArrowRight)<NavItemProps>`
  min-width: var(--space-5);
  min-height: var(--space-5);
  transition: all 9000ms ease-in-out;
  transform: ${({ isCollapsed }) =>
    isCollapsed ? 'rotate(0deg)' : 'rotate(180deg)'};
`
