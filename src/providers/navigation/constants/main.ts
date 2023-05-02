import {
  ActivityMonitor,
  Approvals,
  Apps,
  Briefcase,
  Device,
  Documents,
  Dollar,
  Heart,
  Recipes,
  Reports,
  Settings,
  Tasks,
  Users,
  WorkflowAutomator,
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
        icon: ActivityMonitor,
        path: '/tools/activity-log',
      },
      {
        label: 'Approvals',
        icon: Approvals,
        path: '/tools/approvals',
      },
      {
        label: 'Custom Workflow Builder',
        icon: WorkflowAutomator,
        path: '/tools/workflow-automator',
      },
      {
        label: 'Documents',
        icon: Documents,
        path: '/tools/documents',
      },
      {
        label: 'Recipes',
        icon: Recipes,
        path: '/tools/recipes',
      },
      {
        label: 'Reports',
        icon: Reports,
        path: '/tools/reports',
      },
      {
        label: 'Tasks',
        icon: Tasks,
        path: '/tools/tasks',
      },
    ],
    isExpanded: false,
  },
  {
    label: 'HR Management',
    icon: Users,
    items: [
      {
        label: 'Leave Management',
        icon: Tasks,
        path: '/hr/leave-management',
      },
      {
        label: 'Time Off',
        icon: Tasks,
        path: '/hr/time-off',
      },
      {
        label: 'People',
        icon: Tasks,
        path: '/hr/people',
      },
      {
        label: 'Applicant Tracking',
        icon: Tasks,
        path: '/hr/applicant-tracking',
      },
      {
        label: 'Time & Attendance',
        icon: Tasks,
        path: '/hr/time-attendance',
      },
      {
        label: 'Anniversaries',
        icon: Tasks,
        path: '/hr/anniversaries',
      },
      {
        label: 'Learning Management',
        icon: Tasks,
        path: '/hr/learning-management',
      },
      {
        label: 'Recruiting',
        icon: Tasks,
        path: '/hr/recruiting',
      },
      {
        label: 'Employment Authorization',
        icon: Tasks,
        path: '/hr/emplyment-authorization',
      },
      {
        label: 'Discover more HR apps',
        icon: Apps,
        path: '/hr/discover-more-hr-apps',
      },
    ],
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
