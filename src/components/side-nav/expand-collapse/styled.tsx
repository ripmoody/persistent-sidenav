import { ChevronRight } from '@/components/icons'
import { breakpoints } from '@/providers/navigation/constants/breakpoints'
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
  top: 130px;
  right: 0;
  border: none;
  background: var(--color-surface-container-lowest);
  color: var(--color-on-surface);
  box-shadow: var(--shadows-base);
  border-radius: var(--radius-full);
  transform: translateX(50%);
  opacity: 0;
  scale: 0.8;
  transition: all 200ms ease-in-out;
  outline: 0.5px solid var(--color-outline-variant);
  z-index: 1;

  :hover,
  :focus-visible {
    color: white;
    background: var(--color-plum-400);
    opacity: 1;
    scale: 1;
    box-shadow: 0 0 0 3px var(--color-plum-300);
  }

  :active {
    background: var(--color-plum-500);
  }

  @media (max-width: ${breakpoints.sm}px) {
    display: none;
  }
`

export const ExpandCollapseArrow = styled(ChevronRight)<NavItemProps>`
  transform: ${({ isCollapsed }) =>
    isCollapsed ? 'rotate(0deg)' : 'rotate(180deg)'};
  margin-left: ${({ isCollapsed }) => (isCollapsed ? '0' : '-2px')};
`
