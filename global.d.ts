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

  type NavItem = {
    /**
     * The label for the nav item
     */
    label: string
    /**
     * The icon for the nav item
     */
    icon: ForwardRefExoticComponent<unknown>
    /**
     * The relative path for the nav item.
     */
    path?: string
    /**
     * Whether or not the items is a subnav item.
     */
    isSubNavItem?: boolean
  }
}
