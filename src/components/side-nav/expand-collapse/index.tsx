import { Tooltip } from '@/components'
import { useWindowWidth } from '@/hooks'
import { breakpoints, useNavigation } from '@/providers'
import { useCallback, useEffect, useMemo } from 'react'
import * as S from './styled'

/**
 * This is a special nav item that is responsible for collapsing and expanding the side nav.
 * It is close to a flat nav item but broken apart for easier styling and logic.
 */
export const ExpandCollapseButton = () => {
  const width = useWindowWidth()

  const {
    state: {
      context: { isCollapsed, isForceCollapsed },
    },
    dispatch,
  } = useNavigation()

  const handleMobileHide = useCallback(() => {
    if (width < breakpoints.sm && !isCollapsed) {
      dispatch({ type: 'set-collapsed', payload: true })
      dispatch({ type: 'set-hidden', payload: true })
    }
  }, [dispatch, isCollapsed, width])

  /**
   * Semi hacky way to close the side nav when clicking outside or pressing escape when the side nav is open
   * at small screen sizes
   */
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleMobileHide()
      }
    }

    const handleClick = (e: MouseEvent) => {
      if (
        !e
          .composedPath()
          .includes(document.getElementById('side-nav') as HTMLElement)
      ) {
        handleMobileHide()
      }
    }

    document.addEventListener('click', handleClick)
    document.addEventListener('keyup', handleEscape)

    return () => {
      document.removeEventListener('click', handleClick)
      document.removeEventListener('keyup', handleEscape)
    }
  }, [dispatch, handleMobileHide])

  /**
   * Responsible for setting the responsive collapsed state of the side nav
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
      handleMobileHide()
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
    <Tooltip label={label}>
      <S.ExpandCollapseButton
        isCollapsed={isCollapsed}
        onClick={handleClick}
        id="expand-collapse"
      >
        <S.ExpandCollapseArrow isCollapsed={isCollapsed} size={16} />
      </S.ExpandCollapseButton>
    </Tooltip>
  )
}
