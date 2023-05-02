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
  /**
   * The page-level items to render in the accordion.
   **/
  items: NavItem[]
  /**
   * Whether or not the accordion is expanded to reveal page-level items.
   */
  isExpanded: boolean
}

export const mainNavItems: ExpandableNavItem[] = [
  {
    label: 'Tools',
    icon: Briefcase,
    items: [
      {
        label: 'Activity Log',
        icon: Briefcase,
        path: '/tools/activity-log',
      },
    ],
    isExpanded: false,
  },
  {
    label: 'HR Management',
    icon: Users,
    items: [],
    isExpanded: false,
  },
  {
    label: 'Insurance & Benefits',
    icon: Heart,
    items: [],
    isExpanded: false,
  },
  {
    label: 'IT Management',
    icon: Device,
    items: [],
    isExpanded: false,
  },
  {
    label: 'Finance',
    icon: Dollar,
    items: [],
    isExpanded: false,
  },
  {
    label: 'Third-party Apps',
    icon: Apps,
    items: [],
    isExpanded: false,
  },
  {
    label: 'Settings',
    icon: Settings,
    items: [],
    isExpanded: false,
  },
]
