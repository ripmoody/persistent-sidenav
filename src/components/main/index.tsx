import { useWindowWidth } from '@/hooks'
import {
  breakpoints,
  footerNavItems,
  headerNavItems,
  mainNavItems,
  useNavigation,
} from '@/providers'
import { useRouter } from 'next/router'
import * as S from './styled'

const mainSubNavItems = mainNavItems.map((item) => item.items).flat()
const items = [...headerNavItems, ...mainSubNavItems, ...footerNavItems]

export const Main = ({ children }: Children) => {
  const { state, dispatch } = useNavigation()
  const width = useWindowWidth()
  const { asPath } = useRouter()

  const currentItem = items.find((item) => {
    return item.path === asPath.split('?')[0] // remove query params
  })

  const Icon = currentItem?.icon
  const label = currentItem?.label

  const handleMainClick = (event: React.MouseEvent) => {
    if (!state.context.isCollapsed && width <= breakpoints.md) {
      dispatch({ type: 'set-collapsed', payload: true })
    }
  }

  return (
    <S.Main onClick={handleMainClick}>
      <S.MainHeader>
        <Icon size={32} />
        <S.MainHeaderTitle>{label}</S.MainHeaderTitle>
      </S.MainHeader>
      <S.MainLayout>
        <S.MainContent>
          <S.MainContentLayout>
            <S.MainContentRow>
              <S.MainContentWidget>{children}</S.MainContentWidget>
              <S.MainContentWidget />
            </S.MainContentRow>
            <S.MainContentRow>
              <S.MainContentWidget />
              <S.MainContentWidget />
            </S.MainContentRow>
            <S.MainContentRow>
              <S.MainContentWidget />
              <S.MainContentWidget />
            </S.MainContentRow>
          </S.MainContentLayout>
        </S.MainContent>
      </S.MainLayout>
    </S.Main>
  )
}
