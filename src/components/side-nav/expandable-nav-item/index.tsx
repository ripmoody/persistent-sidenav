import { useNavigation } from '@/providers/navigation'
import type { ExpandableNavItem as ExpandableNavItemType } from '@/providers/navigation/constants/main'
import * as S from './styled'

/**
 * A root level nav item that will not have any children or expand and collapse
 * Primarily used for the top level nav items in the header and footer
 */
export const ExpandableNavItem = (props: ExpandableNavItemType) => {
  const { label, icon: Icon } = props

  const { state, dispatch } = useNavigation()

  const handleExpandCollapse = () => {
    dispatch({ type: 'toggle-item-expanded', payload: props })
  }

  return (
    <>
      <S.ExpandableNavItem isCollapsed={state.context.isCollapsed}>
        <S.ExpandableNavItemButton
          onClick={handleExpandCollapse}
          isCollapsed={state.context.isCollapsed}
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
      {props.isExpanded &&
        !state.context.isCollapsed &&
        props.items.map((item) => <div key={item.label}>{item.label}</div>)}
    </>
  )
}
