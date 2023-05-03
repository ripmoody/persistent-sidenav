import { Menu as MenuIcon } from '@/components/icons/menu'
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuPortal,
  MenuTrigger,
} from '@/components/menu'
import { MenuArrow } from '@/components/menu/styled'
import { useNavigation } from '@/providers/navigation'
import * as S from './styled'

export const SideNavSearch = () => {
  const { state, dispatch } = useNavigation()

  const handleExpandAll = () => {
    dispatch({ type: 'expand-all' })
  }

  const handleCollapseAll = () => {
    dispatch({ type: 'collapse-all' })
  }

  return (
    <S.SideNavSearch isCollapsed={state.context.isCollapsed}>
      <S.SideNavSearchInput placeholder="Search" />
      <Menu>
        <MenuTrigger asChild>
          <S.SideNavMenuIconButton>
            <MenuIcon size={16} />
          </S.SideNavMenuIconButton>
        </MenuTrigger>
        <MenuPortal>
          <MenuContent side="bottom">
            <MenuItem onClick={handleExpandAll}>Expand all</MenuItem>
            <MenuItem onClick={handleCollapseAll}>Collapse all</MenuItem>
            <MenuArrow />
          </MenuContent>
        </MenuPortal>
      </Menu>
    </S.SideNavSearch>
  )
}
