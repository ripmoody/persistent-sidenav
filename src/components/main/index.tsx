import * as S from './styled'

export const Main = ({ children }: Children) => {
  return (
    <S.Main>
      <S.MainHeader>Header</S.MainHeader>
      <S.MainLayout>
        <S.MainContent>{children}</S.MainContent>
      </S.MainLayout>
    </S.Main>
  )
}
