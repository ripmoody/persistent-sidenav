import { footerNavItems } from './constants/footer'
import { headerNavItems } from './constants/header'
import { NavItem } from './nav-item'
import * as S from './styled'

export const SideNav = () => {
  return (
    <S.SideNav>
      <S.SideNavHeader>
        <S.SideNavList>
          {headerNavItems.map((item) => (
            <NavItem
              key={item.path}
              icon={item.icon}
              path={item.path}
              label={item.label}
            />
          ))}
        </S.SideNavList>
      </S.SideNavHeader>
      <S.SideNavMain>
        <S.SideNavList>Main</S.SideNavList>
      </S.SideNavMain>
      <S.SideNavFooter>
        <S.SideNavList>
          {footerNavItems.map((item) => (
            <NavItem
              key={item.path}
              icon={item.icon}
              path={item.path}
              label={item.label}
            />
          ))}
        </S.SideNavList>
      </S.SideNavFooter>
    </S.SideNav>
  )
}
