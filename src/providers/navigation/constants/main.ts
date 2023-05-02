import { Home } from '@/components/icons'

/**
 * The configuration for a navigation item that has expandable content that
 * contains nav items with paths. Items in this list will be rendered as a
 * accordion.
 */
type ExpandableNavItem = NavItem & {
  items: NavItem[]
}

export const mainNavItems: ExpandableNavItem[] = [
  {
    label: 'Tools',
    icon: Home,
    items: [],
  },
  {
    label: 'HR Management',
    icon: Home,
    items: [],
  },
  {
    label: 'Insurance & Benefits',
    icon: Home,
    items: [],
  },
  {
    label: 'IT Management',
    icon: Home,
    items: [],
  },
  {
    label: 'Finance',
    icon: Home,
    items: [],
  },
  {
    label: 'Third-party apps',
    icon: Home,
    items: [],
  },
  {
    label: 'Settings',
    icon: Home,
    items: [],
  },
]
