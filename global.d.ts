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
     * Whether or not the items is a subnav item. The only thing this effects is the padding to
     * the left of the item to indent.
     */
    isSubNavItem?: boolean
    /**
     * A category nav item is a nav item that is not clickable and
     * is used to group other nav items that fall underneath it.
     **/
    category?: string
  }
}
