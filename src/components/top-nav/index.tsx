import { Actions } from './actions'
import { HomeButton } from './logo'
import { SearchInput } from './search'
import * as S from './styled'

export const TopNav = () => {
  return (
    <S.TopNav>
      <HomeButton />
      <SearchInput />
      <Actions />
    </S.TopNav>
  )
}
