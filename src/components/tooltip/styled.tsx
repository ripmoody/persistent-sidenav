import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import * as Tooltip from '@radix-ui/react-tooltip'

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

export const TooltipArrow = styled(Tooltip.Arrow)`
  fill: white;
`

export const TooltipContent = styled(Tooltip.Content)`
  border-radius: var(--radius-base);
  padding: var(--space-2) var(--space-3);
  font-size: var(--type-size-sm);
  line-height: 1;
  color: var(--color-grey-900);
  background-color: white;
  box-shadow: var(--shadows-lg);
  user-select: none;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  &[data-state='delayed-open'][data-side='right'] {
    animation-name: ${slideRightAndFade};
  }
`
