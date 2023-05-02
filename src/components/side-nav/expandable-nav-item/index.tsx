import { useNavigation } from '@/providers/navigation'
import type { ExpandableNavItem as ExpandableNavItemType } from '@/providers/navigation/constants/main'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { FlatNavItem } from '../flat-nav-item'
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
    dispatch({ type: 'toggle-item-expanded', payload: props })
  }

  const hasActiveChild = useMemo(
    () => props.items.some((item) => item.path === router.asPath),
    [router.asPath, props.items],
  )

  return (
    <S.ExpandableNavItemGroup>
      <S.ExpandableNavItem
        isCollapsed={state.context.isCollapsed}
        isNavItemExpanded={props.isExpanded}
        hasActiveChild={hasActiveChild}
      >
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
      </S.ExpandableNavItem>
      <S.ExpandableSubNavList
        isCollapsed={state.context.isCollapsed}
        isNavItemExpanded={props.isExpanded}
      >
        {props.items.map((item) => (
          <FlatNavItem key={item.path} {...item} isSubNavItem />
        ))}
      </S.ExpandableSubNavList>
    </S.ExpandableNavItemGroup>
  )
}