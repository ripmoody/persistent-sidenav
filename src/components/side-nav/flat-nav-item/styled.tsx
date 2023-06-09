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
      return 'var(--space-6)'
    }
    if (!isCollapsed && !isSubNavItem) {
      return 'var(--space-5)'
    }
    return 'var(--space-2)'
  }};

  &:hover {
    background-color: var(--color-grey-50);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-plum-300);
  }
`

export const FlatNavItemIcon = styled.span`
  min-width: var(--space-5);
  min-height: var(--space-5);
  width: var(--space-5);
  height: var(--space-5);
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

export const NavItemCategory = styled.span<NavItemProps>`
  display: ${({ isCollapsed }) => (isCollapsed ? 'none' : 'block')};
  font-size: 10px;
  text-transform: uppercase;
  color: var(--color-grey-400);
  font-weight: var(--type-weight-bold);
  padding: var(--space-4) var(--space-2) var(--space-2) var(--space-6);
  letter-spacing: 0.1rem;
`
