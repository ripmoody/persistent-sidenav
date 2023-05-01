import { useNavigation } from '@/providers/navigation'
import { ExpandCollapseNavItem } from './expand-collapse-nav-item'
import { FlatNavItem } from './flat-nav-item'
import * as S from './styled'

export const SideNav = () => {
  const { state } = useNavigation()

  console.log(state.context)

  return (
    <S.SideNav context={state.context}>
      <S.SideNavHeader>
        <S.SideNavList>
          {state.items.header.map((item) => (
            <FlatNavItem
              key={item.label}
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
          {state.items.footer.map((item) => (
            <FlatNavItem
              key={item.label}
              icon={item.icon}
              path={item.path}
              label={item.label}
              onClick={item.onClick}
            />
          ))}
          <ExpandCollapseNavItem />
        </S.SideNavList>
      </S.SideNavFooter>
    </S.SideNav>
  )
}
