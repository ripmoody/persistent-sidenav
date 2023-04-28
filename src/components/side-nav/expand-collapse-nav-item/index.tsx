import { ArrowLeft, ArrowRight } from '@/components/icons'
import { useWindowWidth } from '@/hooks/use-window-width'
import { useNavigation } from '@/providers/navigation'
import { useEffect, useMemo } from 'react'
import { NavItem } from '../nav-item'

export const ExpandCollapseNavItem = () => {
  const { state, dispatch } = useNavigation()
  const width = useWindowWidth()

  /**
   * This effect is responsible for setting the responsive collapsed state of the side nav
   */
  useEffect(() => {
    /**
     * If the screen size is smaller than 500px, the side nav should be accessible from the top nav
     */
    if (width < 500) {
      dispatch({ type: 'set-hidden', payload: true })
    } else {
      dispatch({ type: 'set-hidden', payload: false })
    }

    /**
     * If isForceCollapsed, the side nav should be collapsed at any size
     */
    if (state.context.isForceCollapsed) {
      return dispatch({ type: 'set-collapsed', payload: true })
    }

    /**
     * If the screen size is bigger than 1200px, the side nav should be expanded
     */
    if (width > 1200) {
      return dispatch({ type: 'set-collapsed', payload: false })
    }

    /**
     * If the screen size is smaller than 1200px, the side nav should be collapsed
     */
    if (width < 1200) {
      return dispatch({ type: 'set-collapsed', payload: true })
    }
  }, [width, dispatch, state.context.isForceCollapsed])

  /**
   * This is responsible for collapsing and expanding the side nav from the side nav.
   * It is only visible when the screen size is larger than 500px
   */
  const handleClick = () => {
    if (width > 1200 && state.context.isCollapsed) {
      dispatch({ type: 'set-force-collapsed', payload: false })
      dispatch({ type: 'set-collapsed', payload: false })
      return
    }

    if (width > 1200 && !state.context.isCollapsed) {
      dispatch({ type: 'set-force-collapsed', payload: true })
      dispatch({ type: 'set-collapsed', payload: true })
      return
    }

    if (width < 1200 && state.context.isCollapsed) {
      // TODO: this should overlay the screen as a panel
      dispatch({ type: 'set-collapsed', payload: false })
      return
    }
  }

  const icon = useMemo(() => {
    return state.context.isCollapsed ? ArrowRight : ArrowLeft
  }, [state.context.isCollapsed])

  const label = useMemo(() => {
    return state.context.isCollapsed ? 'Expand' : 'Collapse'
  }, [state.context.isCollapsed])

  return <NavItem label={label} icon={icon} onClick={handleClick} />
}
