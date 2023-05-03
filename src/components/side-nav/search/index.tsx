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
import { debounce } from 'lodash'
import * as S from './styled'

export const SideNavSearch = () => {
  const { state, dispatch } = useNavigation()

  const handleExpandAll = () => {
    dispatch({ type: 'expand-all' })
  }

  const handleCollapseAll = () => {
    dispatch({ type: 'collapse-all' })
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    debounce(() => {
      dispatch({ type: 'set-filtered-items', payload: e.target.value })
      dispatch({ type: 'expand-all' })
    }, 300)()

  return (
    <S.SideNavSearch isCollapsed={state.context.isCollapsed}>
      <S.SideNavSearchInput placeholder="Search" onChange={handleSearch} />
      <Menu>
        <MenuTrigger asChild>
          <S.SideNavMenuIconButton>
            <MenuIcon size={16} />
          </S.SideNavMenuIconButton>
        </MenuTrigger>
        <MenuPortal>
          <MenuContent side="right">
            <MenuItem onClick={handleExpandAll}>Expand all</MenuItem>
            <MenuItem onClick={handleCollapseAll}>Collapse all</MenuItem>
            <MenuArrow />
          </MenuContent>
        </MenuPortal>
      </Menu>
    </S.SideNavSearch>
  )
}
