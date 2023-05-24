import { useEffect } from 'react'

/**
 * A hacky approach to hiding the expand collapse button on hover of the nav items
 * so that there's no competition between the subnav menu and the button.
 * This could definitely be improved with a more elegant solution using descendant selectors on css
 * but I'm not sure how to do that with the current setup.
 */
export const useHackyHideButton = () => {
  useEffect(() => {
    const navItems = document.querySelectorAll('.nav-item')
    const expandCollapseButton = document.getElementById('expand-collapse')

    const handleMouseEnter = () => {
      if (expandCollapseButton) {
        expandCollapseButton.style.opacity = '0'
        expandCollapseButton.style.scale = '.4'
      }
    }

    const handleMouseLeave = () => {
      if (expandCollapseButton) {
        expandCollapseButton.style.opacity = '1'
        expandCollapseButton.style.scale = '1'
      }
    }

    navItems.forEach((item) => {
      item.addEventListener('mouseenter', handleMouseEnter)
      item.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      navItems.forEach((item) => {
        item.removeEventListener('mouseenter', handleMouseEnter)
        item.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])
}
