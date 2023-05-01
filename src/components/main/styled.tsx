import styled from '@emotion/styled'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const MainHeader = styled.header`
  display: flex;
  padding: var(--space-8);
  background-color: white;
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
