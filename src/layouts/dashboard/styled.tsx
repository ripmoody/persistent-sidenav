import { breakpoints } from '@/components/side-nav/flat-nav-item/expand-collapse'
import styled from '@emotion/styled'
import { Fragment } from 'react'

export const Dashboard = Fragment

export const DashboardPage = styled.div`
  display: flex;
  position: absolute;
  top: var(--top-nav-height);
  left: 0;
  right: 0;
  height: calc(100vh - var(--top-nav-height));
`

export const DashboardSideNavPlaceholder = styled.div`
  width: 0;

  @media (min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.md}px) {
    width: var(--space-16);
  }
`
