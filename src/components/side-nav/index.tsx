import { useNavigation } from '@/providers/navigation'
import { EmptyState } from './empty-state'
import { ExpandableNavItem } from './expandable-nav-item'
import { FlatNavItem } from './flat-nav-item'
import { ExpandCollapseNavItem } from './flat-nav-item/expand-collapse'
import { SideNavSearch } from './search'
import * as S from './styled'

export const SideNav = () => {
  const { state } = useNavigation()

  console.log(state)

  return (
    <S.SideNav context={state.context}>
      <S.SideNavHeader>
        <S.SideNavList>
          {state.items.header.map((item) => (
            <FlatNavItem key={item.label} {...item} />
          ))}
        </S.SideNavList>
      </S.SideNavHeader>
      <S.SideNavMain context={state.context}>
        <SideNavSearch />
        <S.SideNavList>
          {state.data.filteredItems.length < 1 && <EmptyState />}
          {state.data.filteredItems.map((item) => (
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
