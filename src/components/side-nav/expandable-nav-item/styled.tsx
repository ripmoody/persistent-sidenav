import { ChevronRight } from '@/components/icons'
import styled from '@emotion/styled'

type ExpandableNavItemProps = {
  isCollapsed: boolean
}

export const ExpandableNavItem = styled.li<ExpandableNavItemProps>`
  position: relative;
  // TODO: If nav item is collapsed and a child is active, show the nav item as active
`

export const ExpandableNavItemButton = styled.button<ExpandableNavItemProps>`
  display: flex;
  align-items: center;
  padding: var(--space-2);
  width: 100%;
  border: none;
  background: none;
  color: var(--color-text);
  gap: var(--space-3);
  font-size: var(--type-size-md);
  border-radius: var(--radius-base);
  line-height: 1;
  padding-left: ${({ isCollapsed }) =>
    isCollapsed ? 'var(--space-2)' : 'var(--space-5)'};

  &:hover {
    background-color: var(--color-grey-50);
  }
`

export const ExpandableNavItemIcon = styled.span`
  min-width: var(--space-5);
  min-height: var(--space-5);
`

export const ExpandableNavItemLabel = styled.span<ExpandableNavItemProps>`
  line-height: 1;
  display: ${({ isCollapsed }) => (isCollapsed ? 'none' : 'block')};
  white-space: nowrap; // This is worrisome. Stops the text from stacking on expand.
`

type ExpandableNavItemChevronProps = ExpandableNavItemProps & {
  isNavItemExpanded: boolean
}

export const ExpandableNavItemChevron = styled(
  ChevronRight,
)<ExpandableNavItemChevronProps>`
  margin-left: auto;
  display: ${({ isCollapsed }) => (isCollapsed ? 'none' : 'block')};
  transition: transform 100ms ease-in-out;
  transform: ${({ isNavItemExpanded }) =>
    isNavItemExpanded ? 'rotate(90deg)' : 'rotate(0deg)'};
  color: var(--color-grey-600);
`
