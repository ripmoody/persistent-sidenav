import { Tooltip } from '@/components/tooltip'
import { useNavigation } from '@/providers/navigation'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import * as S from './styled'

/**
 * A root level nav item that will not have any children or expand and collapse
 * Primarily used for the top level nav items in the header and footer
 */
export const FlatNavItem = (props: NavItem) => {
  const { path, label, icon: Icon, isSubNavItem, category } = props
  const router = useRouter()

  const {
    state: {
      context: { isCollapsed },
    },
    dispatch,
  } = useNavigation()

  const handleClick = () => {
    if (path) {
      router.push(path)
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
