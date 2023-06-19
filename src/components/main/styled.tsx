import { breakpoints } from '@/providers/navigation/constants/breakpoints'
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
  padding: var(--space-6) var(--space-6);
  background-color: var(--color-grey-100);
  transition: all 0.2s ease-in-out;
  overflow-y: auto;

  @media (max-width: ${breakpoints.md}px) {
    padding: var(--space-6) var(--space-4);
  }
`

export const MainContent = styled.div`
  flex: 1;
  padding: var(--space-4);
  transition: all 0.2s ease-in-out;

  @media (max-width: ${breakpoints.md}px) {
    padding: 0;
  }
`

export const MainContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-6);

  > *:last-child {
    margin-bottom: var(--space-6);
  }
`

export const MainContentRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-6);
`

export const MainContentWidget = styled.div`
  display: flex;
  height: var(--space-80);
  background-color: white;
  flex: 1;
  border-radius: var(--radius-base);
  min-width: var(--space-64);
`
