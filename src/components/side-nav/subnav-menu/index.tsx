import {
  Menu,
  MenuArrow,
  MenuContent,
  MenuItem,
  MenuPortal,
  MenuTrigger,
} from '@/components/menu'
import { useNavigation } from '@/providers/navigation'

type SubNavMenuProps = {
  children: React.ReactNode
}

export const SubNavMenu = (props: SubNavMenuProps) => {
  const { state } = useNavigation()

  if (!state.context.isCollapsed) {
    return <>{props.children}</>
  }

  return (
    <Menu>
      <MenuTrigger asChild>{props.children}</MenuTrigger>
      <MenuPortal>
        <MenuContent side="right">
          <MenuItem>Expand all</MenuItem>
          <MenuItem>Collapse all</MenuItem>
          <MenuArrow />
        </MenuContent>
      </MenuPortal>
    </Menu>
  )
}
