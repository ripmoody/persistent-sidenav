import { Close, Menu } from '@/components/icons'
import { useNavigation } from '@/providers/navigation'
import { NavIconButton } from '../../actions/styled'

export const SideNavButton = () => {
  const { state, dispatch } = useNavigation()

  const handleClick = () => {
    switch (state.context.isCollapsed) {
      case true: {
        dispatch({ type: 'set-hidden', payload: false })
        dispatch({ type: 'set-collapsed', payload: false })
        break
      }

      case false: {
        dispatch({ type: 'set-hidden', payload: true })
        dispatch({ type: 'set-collapsed', payload: true })
      }
    }
  }

  return (
    <NavIconButton onClick={handleClick}>
      {state.context.isCollapsed ? <Menu size={24} /> : <Close size={24} />}
    </NavIconButton>
  )
}
