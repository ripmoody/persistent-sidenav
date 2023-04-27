import { Fragment, useMemo } from 'react'
import * as S from './styled'

export const NavItem = (props: NavItem) => {
  const { path, label, onClick, icon: Icon } = props

  const RelativeLink = useMemo(() => {
    return path ? S.NavItemLink : Fragment
  }, [path])

  return (
    <S.NavItem>
      <RelativeLink href={path!}>
        <S.NavItemButton onClick={onClick}>
          <Icon />
          {label}
        </S.NavItemButton>
      </RelativeLink>
    </S.NavItem>
  )
}
