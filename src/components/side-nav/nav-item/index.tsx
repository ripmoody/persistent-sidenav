import { useRouter } from 'next/router'
import { MouseEvent, useMemo } from 'react'
import * as S from './styled'

export const NavItem = (props: NavItem) => {
  const { path, label, onClick, icon: Icon } = props
  const router = useRouter()

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (path) {
      return router.push(path)
    }

    if (onClick) {
      return onClick(event)
    }
  }

  const isAriaCurrent = useMemo(() => {
    if (router.asPath === path) {
      return 'page'
    }
  }, [router.asPath, path])

  return (
    <S.NavItem aria-current={isAriaCurrent}>
      <S.NavItemButton onClick={handleClick}>
        <Icon />
        {label}
      </S.NavItemButton>
    </S.NavItem>
  )
}
