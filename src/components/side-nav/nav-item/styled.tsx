import styled from '@emotion/styled'
import Link from 'next/link'

export const NavItem = styled.li``

export const NavItemButton = styled.button`
  display: flex;
  align-items: center;
  padding: var(--space-1);
  width: 100%;
  border: none;
  background: none;
  color: var(--color-text);
  gap: var(--space-2);
  font-size: var(--type-size-md);
`

export const NavItemLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`
