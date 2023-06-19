import { useNavigation } from '@/providers/navigation'
import { ExpandCollapseButton } from './expand-collapse'
import { ExpandableNavItem } from './expandable-nav-item'
import { FlatNavItem } from './flat-nav-item'
import * as S from './styled'

export const SideNav = () => {
  const { state } = useNavigation()

  return (
    <S.SideNavRelative context={state.context}>
      <S.SideNav context={state.context} id="side-nav">
        <S.SideNavMain context={state.context}>
          <S.SideNavHeader>
            <S.SideNavList context={state.context}>
              {state.items.header.map((item) => (
                <FlatNavItem key={item.label} {...item} />
              ))}
            </S.SideNavList>
          </S.SideNavHeader>
          <S.SideNavList context={state.context}>
            {state.items.main.map((item) => (
              <ExpandableNavItem key={item.label} {...item} />
            ))}
          </S.SideNavList>
          <S.SideNavFooter>
            <S.SideNavList context={state.context}>
              {state.items.footer.map((item) => (
                <FlatNavItem key={item.label} {...item} />
              ))}
            </S.SideNavList>
          </S.SideNavFooter>
        </S.SideNavMain>
      </S.SideNav>
      <ExpandCollapseButton />
    </S.SideNavRelative>
  )
}
