export {}

declare global {
  /**
   * Generic children type for extending
   */
  type Children = {
    children: React.ReactNode
  }

  /**
   * Generic icon props for managing size
   */
  type IconProps = {
    size?: number
  }

  /**
   * The root config for a nav item that must be supplied
   */
  type NavItem = {
    /**
     * The label for the nav item
     */
    label: string
    /**
     * The icon for the nav item
     */
    icon: ForwardRefExoticComponent
    /**
     * The relative path for the nav item
     */
    path?: string
    /**
     * Callback for when the nav item is clicked.
     */
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  }

  /**
   * A sub navigation item that has a link instead of child items
   */
  type SubNavItem = NavItem & {}
}
