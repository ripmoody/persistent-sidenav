import { css } from '@emotion/react'
import styled from '@emotion/styled'
import type { BadgeProps } from '.'

const typeStyle = ({ type }: BadgeProps) => {
  switch (type) {
    case 'info': {
      return css`
        color: var(--color-plum-700);
        background-color: var(--color-plum-100);
      `
    }

    case 'critical': {
      return css`
        color: #822b1d;
        background-color: #ebb6a9;
      `
    }

    case 'success': {
      return css`
        color: #035752;
        background-color: #b4d4d2;
      `
    }

    case 'warning': {
      return css`
        color: #843b0a;
        background-color: #fac4a0;
      `
    }
  }
}

const sizeStyle = ({ size }: BadgeProps) => {
  switch (size) {
    case 'sm': {
      return css`
        height: var(--space-4);
        font-size: var(--type-size-xs);
        padding: 10px var(--space-2);
      `
    }

    case 'md': {
      return css`
        height: var(--space-7);
        font-size: var(--type-size-sm);
        padding: 0 var(--space-3);
      `
    }

    case 'lg': {
      return css`
        height: var(--space-8);
        padding: 0 var(--space-3);
        font-size: var(--type-size-md);
      `
    }
  }
}

const Badge = styled.span<BadgeProps>`
  pointer-events: none;
  display: inline-flex;
  align-items: center;
  font-family: var(--type-font-basel);
  border-radius: var(--radius-full);
  font-weight: var(--type-weight-medium);
  line-height: 1;
  margin: 0 var(--space-1);
  ${typeStyle}
  ${sizeStyle}
`

export { Badge }
