import { Menu } from '@/components/icons'
import { useNavigation } from '@/providers/navigation'
import * as S from './styled'

export const SideNavSearch = () => {
  const { state } = useNavigation()

  return (
    <S.SideNavSearch isCollapsed={state.context.isCollapsed}>
      <S.SideNavSearchInput placeholder="Search" />
      <S.SideNavSearchIconButton>
        <Menu size={16} />
      </S.SideNavSearchIconButton>
    </S.SideNavSearch>
  )
}
