import * as RTooltip from '@radix-ui/react-tooltip'
import * as S from './styled'

type Props = Children & {
  label: string
  isDisabled?: boolean
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
          <S.TooltipContent sideOffset={12} side="right">
            {props.label}
            <S.TooltipArrow />
          </S.TooltipContent>
        </RTooltip.Portal>
      </RTooltip.Root>
    </RTooltip.Provider>
  )
}
