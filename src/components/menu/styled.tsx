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

const slideUpAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(-6px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const MenuContent = styled(DropdownMenu.Content)`
  display: flex;
  flex-direction: column;
  background: white;
  padding: var(--space-2) 0;
  border-radius: var(--radius-base);
  box-shadow: var(--shadows-lg);
  gap: var(--space-0_5);
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
  list-style: none; // for the menu context

  &[data-side='bottom'] {
    animation-name: ${slideUpAndFade};
  }

  &[data-side='right'] {
    animation-name: ${slideRightAndFade};
  }
`

export const MenuItem = styled(DropdownMenu.Item)`
  cursor: pointer;
  line-height: 1;
  padding: var(--space-2) var(--space-3);

  &:hover {
    background: var(--color-grey-100);
  }
`

export const MenuArrow = styled(DropdownMenu.Arrow)`
  fill: white;
`
