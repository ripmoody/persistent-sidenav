export {}

declare global {
  /**
   * Generic children type for extending
   */
  type Children = {
    children: React.ReactNode
  }

  type PageProps = {
    query: {
      category: string
      id: string
    }
  }

  /**
   * The root level navigation item that must be supplied
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
  }

  /**
   * The configuration for a navigation item that doesn't have any children.
   */
  type FlatNavItem = NavItem & {
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
  type SubNavItem = FlatNavItem & {}
}
