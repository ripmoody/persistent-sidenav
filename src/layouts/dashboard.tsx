import { Main } from '@/components/main'
import { TopNav } from '@/components/top-nav'

export const DashboardLayout = ({ children }: Children) => (
  <>
    <TopNav />
    <Main>{children}</Main>
  </>
)
