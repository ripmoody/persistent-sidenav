import { breakpoints } from '@/components/side-nav/flat-nav-item/expand-collapse'
import styled from '@emotion/styled'

export const Actions = styled.div`
  display: flex;
  align-items: center;
  color: white;
  gap: var(--space-1);
`

export const ProfileButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-base);
  gap: var(--space-2);
  flex-shrink: 0;

  @media (max-width: ${breakpoints.small}px) {
    gap: var(--space-1);
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`

export const ProfileImage = styled.img`
  width: var(--space-7);
  height: var(--space-7);
  border-radius: var(--radius-full);
  object-fit: cover;
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  line-height: 1;
  font-size: var(--type-size-sm);
  gap: var(--space-0_5);

  @media (max-width: ${breakpoints.small}px) {
    display: none;
  }
`

export const ProfileName = styled.span`
  font-weight: var(--type-weight-medium);
`

export const ProfileTitle = styled.span`
  font-weight: var(--type-weight-normal);
  opacity: 0.8;
  font-size: var(--type-size-xs);
`

export const NavIconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: var(--space-2);
  border-radius: var(--radius-base);
  justify-content: center;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`

export const NavActionsIconButton = styled(NavIconButton)`
  @media (max-width: ${breakpoints.medium}px) {
    display: none;
  }
`

export const VerticalRule = styled.div`
  width: 1px;
  height: var(--space-6);
  background: white;
  opacity: 0.5;
  flex-shrink: 0;
  margin: 0 var(--space-2);

  @media (max-width: 600px) {
    display: none;
  }
`
