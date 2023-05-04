import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { useNavigation } from '@/providers/navigation'
import { useRouter } from 'next/router'
import * as S from './styled'

type SubNavMenuProps = {
  /**
   * This serves as the trigger for the menu when the nav is collapsed.
   * It should be a button or link that is clickable.
   */
  children: React.ReactNode
  /**
   * The items that will be rendered in the menu
   */
  items: NavItem[]
}

export const SubNavMenu = (props: SubNavMenuProps) => {
  const { state } = useNavigation()
  const router = useRouter()

  const isAriaCurrent = (path: string) => {
    if (router.asPath === path) {
      return 'page'
    }
  }

  const handleClick = (path: string) => {
    if (path) {
      router.push(path)
    }
  }

  // If the nav is not collapsed, don't render the menu
  if (!state.context.isCollapsed) {
    return <>{props.children}</>
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{props.children}</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <S.SubNavMenuContent side="right" sideOffset={16}>
          {props.items.map((item, index) => {
            if (item.category) {
              return (
                <S.SubNavMenuCategory key={`${item.label}${index}`}>
                  {item.category}
                </S.SubNavMenuCategory>
              )
            }

            return (
              <S.SubNavMenuItem
                key={`${item.label}${index}`}
                aria-current={isAriaCurrent(item.path ?? '')}
                onClick={() => handleClick(item.path ?? '')}
              >
                {<item.icon />}
                {item.label}
              </S.SubNavMenuItem>
            )
          })}
          <S.MenuArrow />
        </S.SubNavMenuContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
