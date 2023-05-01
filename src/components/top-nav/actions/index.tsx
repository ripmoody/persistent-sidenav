import { Accessibility, ChevronDown, Help } from '@/components/icons'
import * as S from './styled'

export const Actions = () => (
  <S.Actions>
    <S.NavIconButton>
      <Help />
    </S.NavIconButton>
    <S.NavIconButton>
      <Accessibility />
    </S.NavIconButton>
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
