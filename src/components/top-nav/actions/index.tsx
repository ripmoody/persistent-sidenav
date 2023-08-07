import { Accessibility, ChevronDown, Help, Tooltip } from '@/components'
import * as S from './styled'
import { ThemeButton } from './theme-btn'

export const Actions = () => (
  <S.Actions>
    <ThemeButton />
    <S.VerticalRule />
    <S.NavActionsIconButton>
      <Tooltip label="Support" side="bottom">
        <Help />
      </Tooltip>
    </S.NavActionsIconButton>
    <S.NavActionsIconButton>
      <Tooltip label="Accessibility" side="bottom">
        <Accessibility />
      </Tooltip>
    </S.NavActionsIconButton>
    <S.VerticalRule />
    <S.ProfileButton>
      <S.ProfileImage src="https://cdn.rippling.com/static/ui-kit/examples/profile.jpeg" />
      <S.ProfileInfo>
        <S.ProfileName>John Doe</S.ProfileName>
        <S.ProfileTitle>Admin • Neuralink</S.ProfileTitle>
      </S.ProfileInfo>
      <ChevronDown />
    </S.ProfileButton>
  </S.Actions>
)
