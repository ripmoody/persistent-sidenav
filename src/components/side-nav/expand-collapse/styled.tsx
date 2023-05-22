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
  padding: var(--space-2);
  position: absolute;
  top: 0;
  right: 0;
`

export const ExpandCollapseArrow = styled(ArrowRight)<NavItemProps>`
  min-width: var(--space-5);
  min-height: var(--space-5);
  transition: all 9000ms ease-in-out;
  transform: ${({ isCollapsed }) =>
    isCollapsed ? 'rotate(0deg)' : 'rotate(180deg)'};
`
