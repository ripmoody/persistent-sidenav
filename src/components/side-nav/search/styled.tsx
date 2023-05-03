import styled from '@emotion/styled'

type SideNavSearchProps = {
  isCollapsed: boolean
}

export const SideNavSearch = styled.div<SideNavSearchProps>`
  display: ${({ isCollapsed }) => (isCollapsed ? 'none' : 'flex')};
  position: sticky;
  right: 0;
  left: 0;
  top: 0;
  align-items: center;
  justify-content: center;
  background: white;
  z-index: 1;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-4) var(--space-1) var(--space-2);
`

export const SideNavSearchInput = styled.input`
  flex: 1;
  border-radius: var(--radius-base);
  border: none;
  outline: none;
  background: var(--color-grey-50);
  padding: var(--space-2) var(--space-3);

  &:focus {
    box-shadow: 0 0 0 2px var(--color-plum-300);
  }
`

export const SideNavMenuIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  padding: var(--space-2);
  border-radius: var(--radius-base);
  outline: none;

  &:hover {
    background: var(--color-grey-50);
  }

  &:focus {
    box-shadow: 0 0 0 2px var(--color-plum-300);
  }
`
