import { Close, Menu } from '@/components'
import { useNavigation } from '@/providers'
import { NavIconButton } from '../../actions/styled'

export const SideNavButton = () => {
  const { state, dispatch } = useNavigation()

  const handleClick = () => {
    switch (state.context.isCollapsed) {
      case true: {
        dispatch({ type: 'set-hidden', payload: false })
        setTimeout(() => {
          // Hacky but results in a much smoother opening animation
          dispatch({ type: 'set-collapsed', payload: false })
        }, 100)
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
