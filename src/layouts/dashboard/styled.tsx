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
  width: var(--space-16);
  transition: width 200ms linear;

  @media (min-width: ${breakpoints.medium}px) {
    width: 0;
  }

  @media (max-width: ${breakpoints.small}px) {
    width: 0;
  }
`
