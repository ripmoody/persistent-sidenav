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

  &[aria-current='page'] button:first-of-type {
    background-color: var(--color-surface-container-low);

    &::before {
      content: '';
      position: absolute;
      top: 4px;
      left: 4px;
      bottom: 4px;
      border-radius: var(--radius-base);
      width: ${({ isCollapsed }) => (isCollapsed ? '0' : 'var(--space-1)')};
      background-color: ${({ isCollapsed }) =>
        isCollapsed ? 'transparent' : 'var(--color-secondary)'};
    }
  }

  &:hover [data-id='favorite'] {
    opacity: 1;
    scale: 1;
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
  color: var(--color-on-surface);
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
    background-color: var(--color-surface-container-low);
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
  line-height: 1.25;
  display: ${({ isCollapsed }) => (isCollapsed ? 'none' : 'block')};
  text-align: left;
  flex: 1;
`

export const NavItemCategory = styled.span<NavItemProps>`
  display: ${({ isCollapsed }) => (isCollapsed ? 'none' : 'block')};
  font-size: 0.7em;
  text-transform: uppercase;
  color: var(--color-on-surface-variant);
  font-weight: 600;
  padding: var(--space-4) var(--space-2) var(--space-2) var(--space-8);
  letter-spacing: 0.15em;
`

export const FlatNavItemFavorite = styled.button`
  position: absolute;
  display: flex;
  padding: 0;
  top: 8px;
  right: var(--space-2);
  background: none;
  border: none;
  opacity: 0;
  scale: 0.5;
  transition: all 0.2s ease-in-out;
  min-width: var(--space-4);
  min-height: var(--space-4);
  width: var(--space-4);
  height: var(--space-4);
  color: var(--color-grey-200);

  [data-theme='dark'] & {
    color: var(--color-grey-500);
  }

  &:hover {
    color: var(--color-yellow-300);
  }

  &:active {
    color: var(--color-yellow-400);
  }

  &[data-favorite='true'] {
    color: var(--color-yellow-300);

    &:hover {
      color: var(--color-yellow-400);
    }

    &:active {
      color: var(--color-yellow-500);
    }
  }
`
