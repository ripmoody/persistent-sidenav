import {
  Apps,
  Briefcase,
  Device,
  Dollar,
  Heart,
  Settings,
  Users,
} from '@/components/icons'

/**
 * The configuration for a navigation item that has expandable content that
 * contains nav items with paths. Items in this list will be rendered as a
 * accordion.
 */
export type ExpandableNavItem = NavItem & {
  items: NavItem[]
}

export const mainNavItems: ExpandableNavItem[] = [
  {
    label: 'Tools',
    icon: Briefcase,
    items: [],
  },
  {
    label: 'HR Management',
    icon: Users,
    items: [],
  },
  {
    label: 'Insurance & Benefits',
    icon: Heart,
    items: [],
  },
  {
    label: 'IT Management',
    icon: Device,
    items: [],
  },
  {
    label: 'Finance',
    icon: Dollar,
    items: [],
  },
  {
    label: 'Third-party apps',
    icon: Apps,
    items: [],
  },
  {
    label: 'Settings',
    icon: Settings,
    items: [],
  },
]
