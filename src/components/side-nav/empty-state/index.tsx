import { EmptyGraphic } from './empty-graphic'
import * as S from './styled'

export const EmptyState = () => {
  return (
    <S.EmptyState>
      <EmptyGraphic />
      <S.EmptyStateContent>
        <S.EmptyStateHeader>No results</S.EmptyStateHeader>
        <S.EmptyStateDescription>
          Consider adjusting your search terms or try a different query to find
          what you&apos;re looking for.
        </S.EmptyStateDescription>
      </S.EmptyStateContent>
    </S.EmptyState>
  )
}
