import styled from '@emotion/styled'

export const EmptyState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: var(--space-10) var(--space-8);
  gap: var(--space-8);
`
export const EmptyStateContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: var(--space-2);
`

export const EmptyStateHeader = styled.h2`
  font-size: var(--type-size-lg);
  font-weight: var(--type-weight-bold);
  line-height: 1;
  margin: 0;
`

export const EmptyStateDescription = styled.span`
  color: var(--color-grey-600);
`
