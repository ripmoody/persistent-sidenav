import { useWindowWidth } from '@/hooks/use-window-width'
import { useNavigation } from '@/providers/navigation'
import { useRouter } from 'next/router'
import { MouseEvent, useState } from 'react'
import * as S from './styled'

/**
 * A root level nav item that will not have any children or expand and collapse
 * Primarily used for the top level nav items in the header and footer
 */
export const ExpandableNavItem = (props: NavItem) => {
  const { path, label, onClick, icon: Icon } = props

  const [isNavItemExpanded, setIsNavItemExpanded] = useState(false)
  const width = useWindowWidth()
  const router = useRouter()

  const {
    state: {
      context: { isCollapsed },
    },
    dispatch,
  } = useNavigation()

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setIsNavItemExpanded(!isNavItemExpanded)
  }

  return (
    <S.ExpandableNavItem isCollapsed={isCollapsed}>
      <S.ExpandableNavItemButton
        onClick={handleClick}
        isCollapsed={isCollapsed}
      >
        <Icon />
        <S.ExpandableNavItemLabel isCollapsed={isCollapsed}>
          {label}
        </S.ExpandableNavItemLabel>
        <S.ExpandableNavItemChevron
          isCollapsed={isCollapsed}
          isNavItemExpanded={isNavItemExpanded}
        />
      </S.ExpandableNavItemButton>
    </S.ExpandableNavItem>
  )
}
