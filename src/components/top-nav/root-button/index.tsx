import { useWindowWidth } from '@/hooks/use-window-width'
import { breakpoints } from '@/providers/navigation/constants/breakpoints'
import { RipplingLogo } from './logo'
import { SideNavButton } from './sidenav-button'
import { HomeLink } from './styled'

export const RootButton = () => {
  const width = useWindowWidth()

  if (width < breakpoints.sm) {
    return <SideNavButton />
  }

  return (
    <HomeLink href="/" aria-label="Navigate home">
      <RipplingLogo />
    </HomeLink>
  )
}
