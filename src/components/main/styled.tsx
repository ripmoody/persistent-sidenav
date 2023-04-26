import styled from '@emotion/styled'

export const Main = styled.main`
  position: absolute;
  top: var(--top-nav-height);
  left: 0;
  right: 0;
  height: calc(100vh - var(--top-nav-height));
`

export const MainHeader = styled.header`
  display: flex;
  padding: var(--space-6) var(--space-4);
  border-bottom: 1px solid var(--color-grey-200);
`

export const MainContent = styled.div`
  display: flex;
  background-color: var(--color-grey-100);
  flex-direction: column;
  height: 100%;
`
