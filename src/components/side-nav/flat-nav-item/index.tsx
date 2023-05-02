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
  const { path, label, icon: Icon } = props
  const router = useRouter()

  const {
    state: { context },
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

  return (
    <S.FlatNavItem
      aria-current={isAriaCurrent}
      isCollapsed={context.isCollapsed}
    >
      <Tooltip label={label} isDisabled={!context.isCollapsed}>
        <S.FlatNavItemButton
          onClick={handleClick}
          isCollapsed={context.isCollapsed}
          isSubNavItem={props.isSubNavItem}
        >
          <S.FlatNavItemIcon>
            <Icon />
          </S.FlatNavItemIcon>
          <S.FlatNavItemLabel isCollapsed={context.isCollapsed}>
            {label}
          </S.FlatNavItemLabel>
        </S.FlatNavItemButton>
      </Tooltip>
    </S.FlatNavItem>
  )
}
