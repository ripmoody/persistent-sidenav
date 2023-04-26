import styled from '@emotion/styled'
import { Fragment } from 'react'

export const Dashboard = styled(Fragment)``

export const DashboardContent = styled.div`
  display: flex;
  position: absolute;
  top: var(--top-nav-height);
  left: 0;
  right: 0;
  height: calc(100vh - var(--top-nav-height));
`
