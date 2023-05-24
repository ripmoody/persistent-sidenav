import { ChevronRight } from '@/components/icons'
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
  padding: var(--space-1_5);
  position: absolute;
  top: 124px;
  right: 0;
  border: none;
  background: white;
  color: var(--color-text);
  box-shadow: var(--shadows-lg);
  border-radius: var(--radius-full);
  transform: translateX(50%);
  opacity: 0;
  scale: 0.4;
  transition: all 140ms ease-in-out;
`

export const ExpandCollapseArrow = styled(ChevronRight)<NavItemProps>`
  transition: all 500ms ease-in-out;
  transform: ${({ isCollapsed }) =>
    isCollapsed ? 'rotate(0deg)' : 'rotate(180deg)'};
`
