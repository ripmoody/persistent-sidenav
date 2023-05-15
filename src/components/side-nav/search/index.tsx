import { Menu as MenuIcon } from '@/components/icons/menu'
import { useNavigation } from '@/providers/navigation'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as D from './search-menu/styled'
import * as S from './styled'

export const SideNavSearch = () => {
  const { state, dispatch } = useNavigation()

  const handleExpandAll = () => {
    dispatch({ type: 'expand-all' })
  }

  const handleCollapseAll = () => {
    dispatch({ type: 'collapse-all' })
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const payload = e.target.value
    dispatch({ type: 'set-search-value', payload })
    dispatch({ type: 'set-filtered-items' })
    dispatch({ type: 'expand-all' })
  }

  return (
    <S.SideNavSearch isCollapsed={state.context.isCollapsed}>
      <S.SideNavSearchInputContainer>
        <S.SideNavSearchIcon size={16} />
        <S.SideNavSearchInput
          placeholder="Search"
          onChange={handleSearch}
          value={state.context.searchValue}
        />
      </S.SideNavSearchInputContainer>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <S.SideNavMenuIconButton>
            <MenuIcon size={16} />
          </S.SideNavMenuIconButton>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <D.MenuContent side="right">
            <D.MenuItem onClick={handleExpandAll}>Expand all</D.MenuItem>
            <D.MenuItem onClick={handleCollapseAll}>Collapse all</D.MenuItem>
            <D.MenuArrow />
          </D.MenuContent>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </S.SideNavSearch>
  )
}
