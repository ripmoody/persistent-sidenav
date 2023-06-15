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
  padding: var(--space-1);
  position: absolute;
  top: 32px;
  right: 0;
  border: none;
  background: white;
  color: var(--color-text);
  box-shadow: var(--shadows-base);
  border-radius: var(--radius-full);
  transform: translateX(50%);
  opacity: 0;
  scale: 0.4;
  transition: all 200ms ease-in-out;
  outline: 0.5px solid var(--color-grey-100);

  :hover {
    color: white;
    background: var(--color-plum-400);
  }

  :active {
    background: var(--color-plum-500);
  }
`

export const ExpandCollapseArrow = styled(ChevronRight)<NavItemProps>`
  transform: ${({ isCollapsed }) =>
    isCollapsed ? 'rotate(0deg)' : 'rotate(180deg)'};
  margin-left: ${({ isCollapsed }) => (isCollapsed ? '0' : '-2px')};
`
