import { ArrowRight } from '@/components/icons'
import styled from '@emotion/styled'

type NavItemProps = {
  /**
   * Whether or not the nav item is collapsed
   */
  isCollapsed: boolean
}

export const ExpandCollapseButton = styled.button<NavItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-1);
  position: absolute;
  top: 128px;
  right: 0;
  border: none;
  background: white;
  color: var(--color-text);
  box-shadow: var(--shadows-md);
  border-radius: var(--radius-full);
  transform: translateX(50%);
  opacity: 0;
  transition: all 200ms ease-in-out;
`

export const ExpandCollapseArrow = styled(ArrowRight)<NavItemProps>`
  transition: all 500ms ease-in-out;
  transform: ${({ isCollapsed }) =>
    isCollapsed ? 'rotate(0deg)' : 'rotate(180deg)'};
`
