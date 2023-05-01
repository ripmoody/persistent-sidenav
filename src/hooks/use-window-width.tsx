import { throttle } from 'lodash'
import { useEffect, useState } from 'react'

/**
 * Observe window width for responsive design
 */
export const useWindowWidth = () => {
  const [width, setWidth] = useState(1200)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const handleResize = throttle(() => setWidth(window.innerWidth), 200)

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return width
}
