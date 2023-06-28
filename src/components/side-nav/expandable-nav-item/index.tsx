import type { ExpandableNavItem as ExpandableNavItemType } from '@/providers'
import { useNavigation } from '@/providers'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { FlatNavItem } from '../flat-nav-item'
import { HoverMenu } from '../hover-menu'
import * as S from './styled'

/**
 * A root level nav item that will not have any children or expand and collapse
 * Primarily used for the top level nav items in the header and footer
 */
export const ExpandableNavItem = (props: ExpandableNavItemType) => {
  const { label, icon: Icon } = props

  const { state, dispatch } = useNavigation()
  const router = useRouter()

  const handleExpandCollapse = () => {
    if (state.context.isCollapsed) {
      dispatch({ type: 'set-collapsed', payload: false })
      return dispatch({
        type: 'set-item-expanded',
        payload: { item: props, isExpanded: true },
      })
    }

    dispatch({ type: 'toggle-item-expanded', payload: props })
  }

  const hasActiveChild = useMemo(() => {
    if (props.label === state.items.main[0].label) {
      return false // Don't duplicate active state of Favorites nav items
    }

    return props.items.some((item) => item.path === router.asPath)
  }, [router.asPath, props.items, props.label, state.items.main])

  if (!props.items.length) {
    return null // Don't render empty nav sections
  }

  return (
    <S.ExpandableNavItemGroup>
      <S.ExpandableNavItem
        isCollapsed={state.context.isCollapsed}
        isNavItemExpanded={props.isExpanded}
        hasActiveChild={hasActiveChild}
      >
        <HoverMenu items={props.items} category={props.label}>
          <S.ExpandableNavItemButton
            onClick={handleExpandCollapse}
            isCollapsed={state.context.isCollapsed}
            hasActiveChild={hasActiveChild}
            isNavItemExpanded={props.isExpanded}
          >
            <S.ExpandableNavItemIcon>
              <Icon />
            </S.ExpandableNavItemIcon>
            <S.ExpandableNavItemLabel isCollapsed={state.context.isCollapsed}>
              {label}
            </S.ExpandableNavItemLabel>
            <S.ExpandableNavItemChevron
              isCollapsed={state.context.isCollapsed}
              isNavItemExpanded={props.isExpanded}
            />
          </S.ExpandableNavItemButton>
        </HoverMenu>
      </S.ExpandableNavItem>
      <S.ExpandableSubNavList
        isCollapsed={state.context.isCollapsed}
        isNavItemExpanded={props.isExpanded}
      >
        {props.items.map((item, index) => (
          <FlatNavItem key={`${item.label}${index}`} {...item} isSubNavItem />
        ))}
      </S.ExpandableSubNavList>
    </S.ExpandableNavItemGroup>
  )
}
