import styled from "@emotion/styled";

export const ProfileButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: var(--space-2);
  border-radius: var(--radius-base);
  gap: var(--space-3);
  flex-shrink: 0;

  @media (max-width: 500px) {
    gap: var(--space-1);
  }
`;

export const ProfileImage = styled.img`
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-full);
  object-fit: cover;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  color: white;
  line-height: 1;
  font-size: var(--type-size-sm);
  gap: var(--space-1);

  @media (max-width: 500px) {
    display: none;
  }
`;

export const ProfileName = styled.span`
  font-weight: var(--type-weight-bold);
`;

export const ProfileTitle = styled.span`
  font-weight: var(--type-weight-normal);
  font-size: var(--type-size-xs);
  opacity: 0.8;
`;