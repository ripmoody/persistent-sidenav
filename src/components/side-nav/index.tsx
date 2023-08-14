import { useWindowWidth } from '@/hooks'
import { breakpoints, useNavigation } from '@/providers'
import { ExpandCollapseButton } from './expand-collapse'
import { ExpandableNavItem } from './expandable-nav-item'
import { FlatNavItem } from './flat-nav-item'
import * as S from './styled'

export const SideNav = () => {
  const { state, dispatch } = useNavigation()
  const width = useWindowWidth()

  const handleSideNavClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement

    /**
     * This sucks and is duplicative from expand-collapse button logic but I need to do this quickly
     * for an example for v8 prototype. I'll clean this up later if needed.
     */
    if (
      target &&
      target.className &&
      typeof target.className === 'string' &&
      target.className.includes('side-nav')
    ) {
      if (width > breakpoints.md && state.context.isCollapsed) {
        dispatch({ type: 'set-force-collapsed', payload: false })
        dispatch({ type: 'set-collapsed', payload: false })
        return
      }

      if (width > breakpoints.md && !state.context.isCollapsed) {
        dispatch({ type: 'set-force-collapsed', payload: true })
        dispatch({ type: 'set-collapsed', payload: true })
        return
      }

      if (state.context.isCollapsed) {
        dispatch({ type: 'set-collapsed', payload: false })
        return
      }

      if (!state.context.isCollapsed) {
        dispatch({ type: 'set-collapsed', payload: true })
        return
      }
    }
  }

  return (
    <S.SideNavRelative context={state.context}>
      <S.SideNav
        context={state.context}
        id="side-nav"
        onClick={handleSideNavClick}
        className="side-nav"
      >
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
          <S.SideNavSpacer className="side-nav" />
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
