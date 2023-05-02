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
     * Callback for when the nav item is clicked.
     */
    // onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  }
}
