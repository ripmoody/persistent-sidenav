import * as S from './styled'

export const SideNav = () => {
  return (
    <S.SideNav>
      <S.SideNavHeader>
        <S.SideNavList>Header</S.SideNavList>
      </S.SideNavHeader>
      <S.SideNavMain>
        <S.SideNavList>Main</S.SideNavList>
      </S.SideNavMain>
      <S.SideNavFooter>
        <S.SideNavList>Footer</S.SideNavList>
      </S.SideNavFooter>
    </S.SideNav>
  )
}
