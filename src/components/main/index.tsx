import * as S from './styled'

export const Main = ({ children }: Children) => {
  return (
    <S.Main>
      <S.MainHeader>Header</S.MainHeader>
      <S.MainContent>{children}</S.MainContent>
    </S.Main>
  )
}
