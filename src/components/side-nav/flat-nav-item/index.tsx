import { useNavigation } from '@/providers/navigation'
import { useRouter } from 'next/router'
import { MouseEvent, useMemo } from 'react'
import * as S from './styled'

/**
 * A root level nav item that will not have any children or expand and collapse
 * Primarily used for the top level nav items in the header and footer
 */
export const FlatNavItem = (props: FlatNavItem) => {
  const { path, label, onClick, icon: Icon } = props
  const router = useRouter()

  const {
    state: { context },
  } = useNavigation()

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      return onClick(event)
    }

    if (path) {
      return router.push(path)
    }
  }

  const isAriaCurrent = useMemo(() => {
    if (router.asPath === path) {
      return 'page'
    }
  }, [router.asPath, path])

  return (
    <S.NavItem aria-current={isAriaCurrent} isCollapsed={context.isCollapsed}>
      <S.NavItemButton onClick={handleClick} isCollapsed={context.isCollapsed}>
        <Icon />
        {!context.isCollapsed && <S.NavItemLabel>{label}</S.NavItemLabel>}
      </S.NavItemButton>
    </S.NavItem>
  )
}
