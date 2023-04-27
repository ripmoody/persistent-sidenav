import React, { forwardRef } from 'react'

export interface IconProps extends React.SVGAttributes<SVGElement> {
  /**
   * Proportionally sets the width and height of the SVG element.
   * Explicit height and width will take precedence.
   * Defaults to 24.
   */
  size?: string | number
}

export const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { size = 20, children, height, width, ...rest } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height={height ?? size}
      width={width ?? size}
      focusable={false}
      fill="currentColor"
      ref={ref}
      aria-hidden
      {...rest}
    >
      {children}
    </svg>
  )
})
