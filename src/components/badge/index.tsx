import { forwardRef } from 'react'
import * as S from './styled'

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  /**
   * The color of the badge. Defaults to `info`.
   */
  type?: 'info' | 'warning' | 'critical' | 'success'
  /**
   * The size of the badge. Defaults to `sm`.
   */
  size?: 'sm' | 'md' | 'lg'
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => (
  <S.Badge ref={ref} {...props} />
))

Badge.defaultProps = {
  type: 'info',
  size: 'sm',
}

export { Badge }
