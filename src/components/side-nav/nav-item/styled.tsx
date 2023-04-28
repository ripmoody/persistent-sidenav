import styled from '@emotion/styled'
import Link from 'next/link'

export const NavItem = styled.li`
  position: relative;

  &[aria-current='page'] button {
    transition: background-color 0.5s ease;
    background-color: var(--color-grey-50);

    &::before {
      content: '';
      position: absolute;
      top: 4px;
      left: 4px;
      bottom: 4px;
      border-radius: var(--radius-base);
      width: var(--space-1);
      background-color: var(--color-yellow-400);
    }
  }
`

export const NavItemLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`

export const NavItemButton = styled.button<Partial<NavItem>>`
  display: flex;
  align-items: center;
  padding: var(--space-2) var(--space-3) var(--space-2) var(--space-5);
  width: 100%;
  border: none;
  background: none;
  color: var(--color-text);
  gap: var(--space-3);
  font-size: var(--type-size-md);
  border-radius: var(--radius-base);

  &:hover {
    background-color: var(--color-grey-50);
  }
`
