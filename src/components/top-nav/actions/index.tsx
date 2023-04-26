import { ChevronIcon } from "./chevron-icon";
import * as S from "./styled";

export const Actions = () => (
  <S.ProfileButton>
    <S.ProfileImage src="https://cdn.rippling.com/static/ui-kit/examples/profile.jpeg" />
    <S.ProfileInfo>
      <S.ProfileName>John Doe</S.ProfileName>
      <S.ProfileTitle>Admin • Neuralink</S.ProfileTitle>
    </S.ProfileInfo>
    <ChevronIcon />
  </S.ProfileButton>
);