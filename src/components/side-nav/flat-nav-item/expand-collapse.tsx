import { ArrowLeft, ArrowRight } from '@/components/icons'
import { useWindowWidth } from '@/hooks/use-window-width'
import { useNavigation } from '@/providers/navigation'
import { useEffect, useMemo } from 'react'
import * as S from './styled'

export const breakpoints = {
  small: 500,
  medium: 900,
  large: 1200,
}

export const ExpandCollapseNavItem = () => {
  const width = useWindowWidth()
  const { state, dispatch } = useNavigation()

  /**
   * This effect is responsible for setting the responsive collapsed state of the side nav
   */
  useEffect(() => {
    /**
     * If the screen size is smaller than 500px, the side nav should be accessible from the top nav
     */
    if (width < breakpoints.small) {
      dispatch({ type: 'set-hidden', payload: true })
    } else {
      dispatch({ type: 'set-hidden', payload: false })
    }

    /**
     * If isForceCollapsed, the side nav should be collapsed at any size
     */
    if (state.context.isForceCollapsed) {
      dispatch({ type: 'set-collapsed', payload: true })
      return // No responsive logic needed
    }

    /**
     * If the screen size is bigger than 1200px, the side nav should be expanded
     */
    if (width > breakpoints.medium) {
      dispatch({ type: 'set-collapsed', payload: false })
    } else {
      dispatch({ type: 'set-collapsed', payload: true })
    }
  }, [width, dispatch, state.context.isForceCollapsed])

  /**
   * This is responsible for collapsing and expanding the side nav from the side nav.
   * It is only visible when the screen size is larger than 500px
   */
  const handleClick = () => {
    if (width > breakpoints.large && state.context.isCollapsed) {
      dispatch({ type: 'set-force-collapsed', payload: false })
      dispatch({ type: 'set-collapsed', payload: false })
      return
    }

    if (width > breakpoints.large && !state.context.isCollapsed) {
      dispatch({ type: 'set-force-collapsed', payload: true })
      dispatch({ type: 'set-collapsed', payload: true })
      return
    }

    if (width < breakpoints.small && !state.context.isCollapsed) {
      dispatch({ type: 'set-hidden', payload: true })
      dispatch({ type: 'set-collapsed', payload: false })
      return
    }

    if (width < breakpoints.large && state.context.isCollapsed) {
      dispatch({ type: 'set-collapsed', payload: false })
      return
    }

    if (width < breakpoints.large && !state.context.isCollapsed) {
      dispatch({ type: 'set-collapsed', payload: true })
      return
    }
  }

  const Icon = useMemo(() => {
    return state.context.isCollapsed ? ArrowRight : ArrowLeft
  }, [state.context.isCollapsed])

  const label = useMemo(() => {
    return state.context.isCollapsed ? 'Expand' : 'Collapse'
  }, [state.context.isCollapsed])

  return (
    <S.NavItem isCollapsed={state.context.isCollapsed}>
      <S.NavItemButton
        onClick={handleClick}
        isCollapsed={state.context.isCollapsed}
      >
        <Icon />
        {!state.context.isCollapsed && <S.NavItemLabel>{label}</S.NavItemLabel>}
      </S.NavItemButton>
    </S.NavItem>
  )
}
