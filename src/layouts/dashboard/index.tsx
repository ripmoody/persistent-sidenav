import { Main } from '@/components/main'
import { SideNav } from '@/components/side-nav'
import { TopNav } from '@/components/top-nav'
import * as S from './styled'

export const DashboardLayout = ({ children }: Children) => (
  <S.Dashboard>
    <TopNav />
    <S.DashboardContent>
      <SideNav />
      <Main>{children}</Main>
    </S.DashboardContent>
  </S.Dashboard>
)
