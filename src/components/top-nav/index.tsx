import { Actions } from './actions'
import { RootButton } from './root-button'
import { SearchInput } from './search'
import * as S from './styled'

export const TopNav = () => {
  return (
    <S.TopNav>
      <RootButton />
      <SearchInput />
      <Actions />
    </S.TopNav>
  )
}
