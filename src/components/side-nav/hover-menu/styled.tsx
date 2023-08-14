import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import * as HoverCard from '@radix-ui/react-hover-card'

const slideRightAndFade = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const HoverMenuContent = styled(HoverCard.Content)`
  display: flex;
  flex-direction: column;
  max-height: 500px;
  max-width: var(--space-96);
  min-width: var(--space-60);
  padding: var(--space-1) 0;
  border-radius: var(--radius-base);
  box-shadow: var(--shadows-lg);
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
  overflow-y: auto;
  color: var(--color-on-surface);
  background: #fff;

  [data-theme='dark'] & {
    background: var(--color-grey-700);
  }

  &[data-side='right'] {
    animation-name: ${slideRightAndFade};
  }
`

export const HoverMenuItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: var(--space-2) var(--space-4) var(--space-2) var(--space-7);
  gap: var(--space-3);
  cursor: pointer;

  &:hover {
    background: var(--color-grey-50);

    [data-theme='dark'] & {
      background: var(--color-grey-600);
    }
  }

  &[aria-current='page'] {
    background-color: var(--color-grey-50);

    [data-theme='dark'] & {
      background: var(--color-grey-600);
    }

    &::before {
      content: '';
      position: absolute;
      top: 4px;
      left: 6px;
      bottom: 4px;
      border-radius: var(--radius-base);
      width: var(--space-1);
      background-color: var(--color-secondary);
    }
  }
`

export const HoverMenuCategory = styled.span`
  display: block;
  font-size: 11px;
  text-transform: uppercase;
  color: var(--color-on-surface-variant);
  font-weight: var(--type-weight-bold);
  padding: var(--space-4) var(--space-2) var(--space-2) var(--space-7);
  letter-spacing: 0.1rem;
`

export const HoverMenuTitle = styled.span`
  display: block;
  font-size: 13px;
  text-transform: uppercase;
  padding: var(--space-2) var(--space-4) var(--space-2);
  border-bottom: 1px solid;
  font-weight: var(--type-weight-bold);
  letter-spacing: var(--type-space-wider);
  color: var(--color-on-surface);
  margin-bottom: var(--space-1);
  border-bottom-color: var(--color-grey-200);

  [data-theme='dark'] & {
    border-bottom-color: var(--color-grey-600);
  }
`
