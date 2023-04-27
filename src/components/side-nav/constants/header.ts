/**
 * The root config for a nav item that must be supplied
 */
type NavItem = {
  name: string
  icon: JSX.Element
}

/**
 * A nav item that has a link instead of child items
 */
type NavItemWithPath = NavItem & {
  path: string
}

/**
 * A nav item that has child items and is used to progressively disclose them
 */
type NavItemWithSubNav = NavItem & {}

/**
 * A sub navigation item that has a link instead of child items
 */
type SubNavItem = NavItemWithPath & {}
