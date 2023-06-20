import { Accessibility, ChevronDown, Help } from '@/components'
import * as S from './styled'

export const Actions = () => (
  <S.Actions>
    <S.NavActionsIconButton>
      <Help />
    </S.NavActionsIconButton>
    <S.NavActionsIconButton>
      <Accessibility />
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
