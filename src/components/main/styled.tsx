import styled from '@emotion/styled'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const MainHeader = styled.header`
  display: flex;
  align-items: center;
  padding: var(--space-4) var(--space-8);
  background-color: white;
  gap: var(--space-4);
`

export const MainHeaderTitle = styled.h1`
  font-size: var(--type-size-2xl);
  font-weight: var(--type-weight-medium);
  font-family: var(--type-font-styrene);
  line-height: 1;
`

export const MainLayout = styled.div`
  display: flex;
  flex: 1;
  padding: var(--space-8) var(--space-8);
  background-color: var(--color-grey-100);
`

export const MainContent = styled.div`
  flex: 1;
  background-color: var(--color-grey-50);
  padding: var(--space-6);
  border-radius: var(--radius-base);
`
