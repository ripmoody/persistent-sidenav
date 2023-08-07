import * as RTooltip from '@radix-ui/react-tooltip'
import * as S from './styled'

type Props = Children & {
  /**
   * The text to display in the tooltip
   */
  label: string
  /**
   * Conditionally removes the tooltip entirely and only renders children in a fragment
   */
  isDisabled?: boolean
  /**
   * The side of the trigger the tooltip should appear on
   */
  side?: 'top' | 'right' | 'bottom' | 'left'
}

export const Tooltip = (props: Props) => {
  if (props.isDisabled) {
    return <>{props.children}</>
  }

  return (
    <RTooltip.Provider delayDuration={50}>
      <RTooltip.Root>
        <RTooltip.Trigger asChild>{props.children}</RTooltip.Trigger>
        <RTooltip.Portal>
          <S.TooltipContent sideOffset={12} side={props.side ?? 'right'}>
            {props.label}
            <S.TooltipArrow />
          </S.TooltipContent>
        </RTooltip.Portal>
      </RTooltip.Root>
    </RTooltip.Provider>
  )
}
