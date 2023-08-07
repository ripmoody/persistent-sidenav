import { footerNavItems, headerNavItems, mainNavItems } from '@/providers'
import { useRouter } from 'next/router'
import * as S from './styled'

const mainSubNavItems = mainNavItems.map((item) => item.items).flat()
const items = [...headerNavItems, ...mainSubNavItems, ...footerNavItems]

export const Main = ({ children }: Children) => {
  const { asPath } = useRouter()

  const currentItem = items.find((item) => {
    return item.path === asPath
  })

  const Icon = currentItem?.icon
  const label = currentItem?.label

  return (
    <S.Main>
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
