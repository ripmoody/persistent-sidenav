import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

const slideRightAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(-2px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const SubNavMenuContent = styled(DropdownMenu.Content)`
  display: flex;
  flex-direction: column;
  background: white;
  max-height: 600px;
  padding: var(--space-1) 0;
  border-radius: var(--radius-base);
  box-shadow: var(--shadows-lg);
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
  overflow-y: auto;

  &[data-side='right'] {
    animation-name: ${slideRightAndFade};
  }
`

export const SubNavMenuItem = styled(DropdownMenu.Item)`
  position: relative;
  display: flex;
  align-items: center;
  padding: var(--space-2) var(--space-4) var(--space-2) var(--space-7);
  gap: var(--space-3);
  cursor: pointer;

  &:hover {
    background: var(--color-grey-50);
  }

  &[aria-current='page'] {
    background-color: var(--color-grey-50);

    &::before {
      content: '';
      position: absolute;
      top: 4px;
      left: 6px;
      bottom: 4px;
      border-radius: var(--radius-base);
      width: var(--space-1);
      background-color: var(--color-yellow-400);
    }
  }
`

export const SubNavMenuCategory = styled.span`
  display: block;
  font-size: 11px;
  text-transform: uppercase;
  color: var(--color-grey-400);
  font-weight: var(--type-weight-bold);
  padding: var(--space-4) var(--space-2) var(--space-2) var(--space-7);
  letter-spacing: 0.1rem;
`

export const MenuArrow = styled(DropdownMenu.Arrow)`
  fill: white;
`
