import { breakpoints } from '@/components/side-nav/flat-nav-item/expand-collapse'
import { useWindowWidth } from '@/hooks/use-window-width'
import { RipplingLogo } from './logo'
import { SideNavButton } from './sidenav-button'
import { HomeLink } from './styled'

export const RootButton = () => {
  const width = useWindowWidth()

  if (width < breakpoints.small) {
    return <SideNavButton />
  }

  return (
    <HomeLink href="/" aria-label="Navigate home">
      <RipplingLogo />
    </HomeLink>
  )
}
