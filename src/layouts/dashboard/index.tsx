import { Main } from '@/components/main'
import { SideNav } from '@/components/side-nav'
import { TopNav } from '@/components/top-nav'
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
