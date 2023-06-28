import { AdUnit, StarFill, Tooltip } from '@/components'
import { useWindowWidth } from '@/hooks'
import { breakpoints, useNavigation } from '@/providers'
import { useRouter } from 'next/router'
import * as S from './styled'

export const FlatNavItem = (props: NavItem) => {
  const {
    path,
    label,
    icon: Icon,
    isSubNavItem,
    category,
    adUnit,
    isFavorite,
    isDisabledFavorite,
  } = props
  const router = useRouter()
  const width = useWindowWidth()

  const {
    state: {
      context: { isCollapsed, isForceCollapsed },
    },
    dispatch,
  } = useNavigation()

  const handleClick = () => {
    if (path) {
      router.push(path)
    }

    if (isForceCollapsed) {
      dispatch({ type: 'set-collapsed', payload: true })
    }

    if (width < breakpoints.sm) {
      dispatch({ type: 'set-collapsed', payload: true })
      dispatch({ type: 'set-hidden', payload: true })
      return
    }

    if (width < breakpoints.md) {
      dispatch({ type: 'set-collapsed', payload: true })
      return
    }
  }

  const isAriaCurrent = () => {
    return router.asPath === path ? 'page' : undefined
  }

  const handleFavoriteClick = (event: React.MouseEvent) => {
    const dataFavorite = (event.currentTarget as HTMLElement).getAttribute(
      'data-favorite',
    )

    switch (dataFavorite) {
      case 'true':
        dispatch({ type: 'remove-item-favorite', payload: props })
        break

      default:
        dispatch({ type: 'add-item-favorite', payload: props })
        break
    }
  }

  if (adUnit) {
    return <AdUnit />
  }

  if (category) {
    return (
      <S.NavItemCategory isCollapsed={isCollapsed}>
        {category}
      </S.NavItemCategory>
    )
  }

  console.log(isFavorite)

  return (
    <S.FlatNavItem aria-current={isAriaCurrent()} isCollapsed={isCollapsed}>
      <Tooltip label={label} isDisabled={!isCollapsed || isSubNavItem}>
        <S.FlatNavItemButton
          onClick={handleClick}
          isCollapsed={isCollapsed}
          isSubNavItem={isSubNavItem}
        >
          <S.FlatNavItemIcon>
            <Icon />
          </S.FlatNavItemIcon>
          <S.FlatNavItemLabel isCollapsed={isCollapsed}>
            {label}
          </S.FlatNavItemLabel>
        </S.FlatNavItemButton>
      </Tooltip>
      {isSubNavItem && !isCollapsed && !isDisabledFavorite && (
        <S.FlatNavItemFavorite
          data-id="favorite"
          data-favorite={isFavorite}
          onClick={handleFavoriteClick}
        >
          <StarFill />
        </S.FlatNavItemFavorite>
      )}
    </S.FlatNavItem>
  )
}
