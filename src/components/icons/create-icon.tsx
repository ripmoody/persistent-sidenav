import React, { forwardRef } from 'react'
import { Icon, IconProps } from './icon'

interface CreateIconOptions {
  /**
   * The `svg` path or group element
   */
  path: React.ReactElement | React.ReactElement[]
}

/**
 * Convenience function around the Icon component for making icons.
 */
export function createIcon(options: CreateIconOptions) {
  return forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    return (
      <Icon {...props} ref={ref}>
        {options.path}
      </Icon>
    )
  })
}
