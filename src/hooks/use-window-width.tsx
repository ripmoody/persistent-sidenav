import { breakpoints } from '@/components/side-nav/expand-collapse-nav-item'
import { throttle } from 'lodash'
import { useEffect, useState } from 'react'

/**
 * Observe window width for responsive design
 */
export const useWindowWidth = () => {
  const [width, setWidth] = useState(breakpoints.large) // Assume it's expanded by default

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    setWidth(window.innerWidth) // Set initial width

    const handleResize = throttle(() => setWidth(window.innerWidth), 200)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return width
}
