import { Tooltip } from '@/components/tooltip'
import { useWindowWidth } from '@/hooks/use-window-width'
import { useNavigation } from '@/providers/navigation'
import { useRouter } from 'next/router'
import { MouseEvent, useMemo } from 'react'
import { breakpoints } from './expand-collapse'
import * as S from './styled'

/**
 * A root level nav item that will not have any children or expand and collapse
 * Primarily used for the top level nav items in the header and footer
 */
export const FlatNavItem = (props: FlatNavItem) => {
  const width = useWindowWidth()
  const { path, label, onClick, icon: Icon } = props
  const router = useRouter()

  const {
    state: { context },
    dispatch,
  } = useNavigation()

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event)
    }

    if (path) {
      router.push(path)
    }

    if (width < breakpoints.medium) {
      dispatch({ type: 'set-collapsed', payload: true })
    }

    if (width < breakpoints.small) {
      dispatch({ type: 'set-hidden', payload: true })
    }
  }

  const isAriaCurrent = useMemo(() => {
    if (router.asPath === path) {
      return 'page'
    }
  }, [router.asPath, path])

  return (
    <S.NavItem aria-current={isAriaCurrent} isCollapsed={context.isCollapsed}>
      <Tooltip label={label} isDisabled={!context.isCollapsed}>
        <S.NavItemButton
          onClick={handleClick}
          isCollapsed={context.isCollapsed}
        >
          <Icon />
          <S.NavItemLabel isCollapsed={context.isCollapsed}>
            {label}
          </S.NavItemLabel>
        </S.NavItemButton>
      </Tooltip>
    </S.NavItem>
  )
}
