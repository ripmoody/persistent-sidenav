import { ArrowLeft, ArrowRight } from '@/components/icons'
import { Tooltip } from '@/components/tooltip'
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
  const {
    state: { context },
    dispatch,
  } = useNavigation()

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
    if (context.isForceCollapsed) {
      dispatch({ type: 'set-collapsed', payload: true })
      return // No responsive logic needed
    }

    /**
     * If the screen size is bigger than medium breakpoint, the side nav should be expanded
     */
    if (width > breakpoints.medium) {
      dispatch({ type: 'set-collapsed', payload: false })
    } else {
      dispatch({ type: 'set-collapsed', payload: true })
    }
  }, [width, dispatch, context.isForceCollapsed])

  /**
   * This is responsible for collapsing and expanding the side nav from the side nav.
   * It is only visible when the screen size is larger than 500px
   */
  const handleClick = () => {
    if (width > breakpoints.medium && context.isCollapsed) {
      dispatch({ type: 'set-force-collapsed', payload: false })
      dispatch({ type: 'set-collapsed', payload: false })
      return
    }

    if (width > breakpoints.medium && !context.isCollapsed) {
      dispatch({ type: 'set-force-collapsed', payload: true })
      dispatch({ type: 'set-collapsed', payload: true })
      return
    }

    if (width < breakpoints.small && !context.isCollapsed) {
      dispatch({ type: 'set-collapsed', payload: true })
      dispatch({ type: 'set-hidden', payload: true })
      return
    }

    if (width < breakpoints.large && context.isCollapsed) {
      dispatch({ type: 'set-collapsed', payload: false })
      return
    }

    if (width < breakpoints.large && !context.isCollapsed) {
      dispatch({ type: 'set-collapsed', payload: true })
      return
    }
  }

  const Icon = useMemo(() => {
    return context.isCollapsed ? ArrowRight : ArrowLeft
  }, [context.isCollapsed])

  const label = useMemo(() => {
    return context.isCollapsed ? 'Expand' : 'Collapse'
  }, [context.isCollapsed])

  return (
    <Tooltip label={label} isDisabled={!context.isCollapsed}>
      <S.NavItem isCollapsed={context.isCollapsed}>
        <S.NavItemButton
          onClick={handleClick}
          isCollapsed={context.isCollapsed}
        >
          <Icon />
          <S.NavItemLabel isCollapsed={context.isCollapsed}>
            {label}
          </S.NavItemLabel>
        </S.NavItemButton>
      </S.NavItem>
    </Tooltip>
  )
}
