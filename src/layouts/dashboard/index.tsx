import { Main, SideNav, TopNav } from '@/components'
import * as S from './styled'

export const DashboardLayout = ({ children }: Children) => (
  <S.Dashboard>
    <TopNav />
    <S.DashboardPage>
      <SideNav />
      <S.DashboardSideNavPlaceholder />
      <Main>{children}</Main>
    </S.DashboardPage>
  </S.Dashboard>
)
