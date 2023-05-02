import { Tooltip } from '@/components/tooltip'
import { useWindowWidth } from '@/hooks/use-window-width'
import { useNavigation } from '@/providers/navigation'
import { breakpoints } from '@/providers/navigation/constants/breakpoints'
import { useEffect, useMemo } from 'react'
import * as S from './styled'

export const ExpandCollapseNavItem = () => {
  const width = useWindowWidth()
  const {
    state: {
      context: { isCollapsed, isForceCollapsed },
    },
    dispatch,
  } = useNavigation()

  /**
   * This effect is responsible for setting the responsive collapsed state of the side nav
   */
  useEffect(() => {
    /**
     * If the screen size is smaller than 500px, the side nav should be accessible from the top nav
     */
    if (width < breakpoints.sm) {
      dispatch({ type: 'set-hidden', payload: true })
    } else {
      dispatch({ type: 'set-hidden', payload: false })
    }

    /**
     * If isForceCollapsed, the side nav should be collapsed at any size
     */
    if (isForceCollapsed) {
      dispatch({ type: 'set-collapsed', payload: true })
      return // No responsive logic needed
    }

    /**
     * If the screen size is bigger than medium breakpoint, the side nav should be expanded
     */
    if (width > breakpoints.md) {
      dispatch({ type: 'set-collapsed', payload: false })
    } else {
      dispatch({ type: 'set-collapsed', payload: true })
    }
  }, [width, dispatch, isForceCollapsed])

  /**
   * This is responsible for collapsing and expanding the side nav from the side nav.
   * It is only visible when the screen size is larger than 500px
   */
  const handleClick = () => {
    if (width > breakpoints.md && isCollapsed) {
      dispatch({ type: 'set-force-collapsed', payload: false })
      dispatch({ type: 'set-collapsed', payload: false })
      return
    }

    if (width > breakpoints.md && !isCollapsed) {
      dispatch({ type: 'set-force-collapsed', payload: true })
      dispatch({ type: 'set-collapsed', payload: true })
      return
    }

    if (width < breakpoints.sm && !isCollapsed) {
      dispatch({ type: 'set-collapsed', payload: true })
      dispatch({ type: 'set-hidden', payload: true })
      return
    }

    if (width < breakpoints.lg && isCollapsed) {
      dispatch({ type: 'set-collapsed', payload: false })
      return
    }

    if (width < breakpoints.lg && !isCollapsed) {
      dispatch({ type: 'set-collapsed', payload: true })
      return
    }
  }

  const label = useMemo(
    () => (isCollapsed ? 'Expand' : 'Collapse'),
    [isCollapsed],
  )

  return (
    <Tooltip label={label} isDisabled={!isCollapsed}>
      <S.FlatNavItem isCollapsed={isCollapsed}>
        <S.FlatNavItemButton onClick={handleClick} isCollapsed={isCollapsed}>
          <S.ExpandableArrowIcon isCollapsed={isCollapsed} />
          <S.FlatNavItemLabel isCollapsed={isCollapsed}>
            {label}
          </S.FlatNavItemLabel>
        </S.FlatNavItemButton>
      </S.FlatNavItem>
    </Tooltip>
  )
}
