import styled from '@emotion/styled'
import Link from 'next/link'

type NavItemProps = {
  isCollapsed: boolean
}

export const NavItem = styled.li<NavItemProps>`
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

export const NavItemLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`

export const NavItemButton = styled.button<NavItemProps>`
  display: flex;
  align-items: center;
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

  &:hover {
    background-color: var(--color-grey-50);
  }

  // Stops a flash of the icon resizing when being expanded
  & > svg {
    min-width: var(--space-5);
    min-height: var(--space-5);
  }
`

export const NavItemLabel = styled.span<NavItemProps>`
  line-height: 1;
  display: ${({ isCollapsed }) => (isCollapsed ? 'none' : 'block')};
  white-space: nowrap; // This is worrisome
`