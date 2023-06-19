import { Tooltip } from '@/components/tooltip'
import { useWindowWidth } from '@/hooks/use-window-width'
import { useNavigation } from '@/providers/navigation'
import { breakpoints } from '@/providers/navigation/constants/breakpoints'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import * as S from './styled'

export const FlatNavItem = (props: NavItem) => {
  const { path, label, icon: Icon, isSubNavItem, category } = props
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

  const isAriaCurrent = useMemo(() => {
    if (router.asPath === path) {
      return 'page'
    }
  }, [router.asPath, path])

  if (category) {
    return (
      <S.NavItemCategory isCollapsed={isCollapsed}>
        {category}
      </S.NavItemCategory>
    )
  }

  return (
    <S.FlatNavItem aria-current={isAriaCurrent} isCollapsed={isCollapsed}>
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
    </S.FlatNavItem>
  )
}
