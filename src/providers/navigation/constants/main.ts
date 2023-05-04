import {
  ActivityMonitor,
  Approvals,
  Apps,
  Briefcase,
  CompanyDetails,
  CompanySettings,
  DataManager,
  Device,
  Documents,
  Dollar,
  GlobalPayroll,
  Heart,
  Payroll,
  Permissions,
  Recipes,
  Reports,
  Security,
  Settings,
  SpendManagement,
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
    items: [
      {
        label: '', // ignored
        icon: Tasks, // ignored
        category: 'Device management',
      },
      {
        label: 'Devices',
        icon: Tasks,
        path: '/it/devices',
      },
      {
        label: 'Discover more Device apps',
        icon: Apps,
        path: '/it/discover-more-device-apps',
      },
      {
        label: '', // ignored
        icon: Tasks, // ignored
        category: 'Identity management',
      },
      {
        label: 'RPass',
        icon: Tasks,
        path: '/it/r-pass',
      },
      {
        label: 'SSH Key Manager',
        icon: Tasks,
        path: '/it/ssk-key-manager',
      },
      {
        label: 'Virtual LDAP',
        icon: Tasks,
        path: '/it/virtual-ldap',
      },
      {
        label: 'Custom App',
        icon: Tasks,
        path: '/it/custom-app',
      },
      {
        label: '', // ignored
        icon: Tasks, // ignored
        category: 'Automated Compliance',
      },
      {
        label: 'Automated Compliance',
        icon: Tasks,
        path: '/it/auto-compliance',
      },
    ],
    isExpanded: false,
  },
  {
    label: 'Finance',
    icon: Dollar,
    isExpanded: false,
    items: [
      {
        label: 'Payroll',
        icon: Payroll,
        path: '/finance/payroll',
      },
      {
        label: 'Global Payroll',
        icon: GlobalPayroll,
        path: '/finance/global-payroll',
      },
      {
        label: 'Spend Management',
        icon: SpendManagement,
        path: '/finance/spend-management',
      },
    ],
  },
  {
    label: 'Third-party Apps',
    icon: Apps,
    isExpanded: false,
    items: [],
  },
  {
    label: 'Settings',
    icon: Settings,
    isExpanded: false,

    items: [
      {
        label: 'Permissions',
        icon: Permissions,
        path: '/settings/permissions',
      },
      {
        label: 'Data Manager',
        icon: DataManager,
        path: '/settings/data-manager',
      },
      {
        label: 'Company Details',
        icon: CompanyDetails,
        path: '/settings/company-details',
      },
      {
        label: 'Company Settings',
        icon: CompanySettings,
        path: '/settings/company-settings',
      },
      {
        label: 'Security',
        icon: Security,
        path: '/settings/security',
      },
    ],
  },
]
