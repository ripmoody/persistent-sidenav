import { useNavigation } from '@/providers/navigation'
import { ExpandableNavItem } from './expandable-nav-item'
import { FlatNavItem } from './flat-nav-item'
import { ExpandCollapseNavItem } from './flat-nav-item/expand-collapse'
import * as S from './styled'

export const SideNav = () => {
  const { state } = useNavigation()

  console.log(state.context)

  return (
    <S.SideNav context={state.context}>
      <S.SideNavHeader>
        <S.SideNavList>
          {state.items.header.map((item) => (
            <FlatNavItem key={item.label} {...item} />
          ))}
        </S.SideNavList>
      </S.SideNavHeader>
      <S.SideNavMain>
        <S.SideNavList>
          {state.items.main.map((item) => (
            <ExpandableNavItem key={item.label} {...item} />
          ))}
        </S.SideNavList>
      </S.SideNavMain>
      <S.SideNavFooter>
        <S.SideNavList>
          {state.items.footer.map((item) => (
            <FlatNavItem key={item.label} {...item} />
          ))}
          <ExpandCollapseNavItem />
        </S.SideNavList>
      </S.SideNavFooter>
    </S.SideNav>
  )
}
