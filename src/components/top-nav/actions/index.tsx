import { AccessibilityIcon } from './accessibility-icon'
import { ChevronIcon } from './chevron-icon'
import { HelpIcon } from './help-icon'
import * as S from './styled'

export const Actions = () => (
  <S.Actions>
    <S.NavIconButton>
      <HelpIcon />
    </S.NavIconButton>
    <S.NavIconButton>
      <AccessibilityIcon />
    </S.NavIconButton>
    <S.VerticalRule />
    <S.ProfileButton>
      <S.ProfileImage src="https://cdn.rippling.com/static/ui-kit/examples/profile.jpeg" />
      <S.ProfileInfo>
        <S.ProfileName>John Doe</S.ProfileName>
        <S.ProfileTitle>Admin • Neuralink</S.ProfileTitle>
      </S.ProfileInfo>
      <ChevronIcon />
    </S.ProfileButton>
  </S.Actions>
)
