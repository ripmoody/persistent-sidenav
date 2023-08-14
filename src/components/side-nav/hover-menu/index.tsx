import { useNavigation } from '@/providers'
import * as HoverCard from '@radix-ui/react-hover-card'
import { useRouter } from 'next/router'
import * as S from './styled'

type HoverMenuProps = {
  /**
   * This serves as the trigger for the menu when the nav is collapsed.
   * It should be a button or link that is clickable.
   */
  children: React.ReactNode
  /**
   * The items that will be rendered in the menu
   */
  items: NavItem[]
  /**
   * The category label to render in the menu
   */
  category: string
}

export const HoverMenu = (props: HoverMenuProps) => {
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

      // This is a hack to get the hover menu to close when a link is clicked
      // There is almost certainly a better way to do this
      setTimeout(() => {
        const event = new KeyboardEvent('keydown', {
          bubbles: true,
          cancelable: true,
          key: 'Escape',
        })
        document.dispatchEvent(event)
      }, 100)
    }
  }

  // If the nav is not collapsed, don't render the menu
  if (!state.context.isCollapsed) {
    return <>{props.children}</>
  }

  return (
    <HoverCard.Root openDelay={50} closeDelay={50}>
      <HoverCard.Trigger asChild>{props.children}</HoverCard.Trigger>
      <HoverCard.Portal>
        <S.HoverMenuContent side="right" sideOffset={20}>
          <S.HoverMenuTitle>{props.category}</S.HoverMenuTitle>
          {props.items.map((item, index) => {
            if (item.adUnit) {
              return null
            }

            if (item.category) {
              return (
                <S.HoverMenuCategory key={`${item.label}${index}`}>
                  {item.category}
                </S.HoverMenuCategory>
              )
            }

            return (
              <S.HoverMenuItem
                key={`${item.label}${index}`}
                aria-current={isAriaCurrent(item.path ?? '')}
                onClick={() => handleClick(item.path ?? '')}
              >
                {<item.icon />}
                {item.label}
              </S.HoverMenuItem>
            )
          })}
        </S.HoverMenuContent>
      </HoverCard.Portal>
    </HoverCard.Root>
  )
}
