import {
  ActivityMonitor,
  AddApp,
  AllApps,
  Anniversaries,
  ApplicantTracking,
  Approvals,
  AutomatedCompliance,
  Briefcase,
  Buildkite,
  Cloudflare,
  Commuter,
  CompanyDetails,
  CompanySettings,
  CustomApp,
  DataManager,
  Device,
  Devices,
  Documents,
  Dollar,
  Doordash,
  Dropbox,
  Duo,
  EmploymentAuthorization,
  Expensify,
  Fsa,
  GlobalPayroll,
  GlobalPension,
  Google,
  Heart,
  Hsa,
  Ironclad,
  Jobvite,
  LearningManagement,
  LeaveManagement,
  Microsoft,
  Microsoft365,
  Payroll,
  People,
  Permissions,
  RPass,
  Recipes,
  Recruiting,
  Reports,
  SSHKeypass,
  Security,
  Settings,
  SpendManagement,
  Tasks,
  TimeAttendance,
  TimeOff,
  Users,
  VirtualLdap,
  WorkerComp,
  WorkflowAutomator,
} from '@/components/icons'
import { Apps } from '@/components/icons/apps'

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
        icon: LeaveManagement,
        path: '/hr/leave-management',
      },
      {
        label: 'Time Off',
        icon: TimeOff,
        path: '/hr/time-off',
      },
      {
        label: 'People',
        icon: People,
        path: '/hr/people',
      },
      {
        label: 'Applicant Tracking',
        icon: ApplicantTracking,
        path: '/hr/applicant-tracking',
      },
      {
        label: 'Time & Attendance',
        icon: TimeAttendance,
        path: '/hr/time-attendance',
      },
      {
        label: 'Anniversaries',
        icon: Anniversaries,
        path: '/hr/anniversaries',
      },
      {
        label: 'Learning Management',
        icon: LearningManagement,
        path: '/hr/learning-management',
      },
      {
        label: 'Recruiting',
        icon: Recruiting,
        path: '/hr/recruiting',
      },
      {
        label: 'Employment Authorization',
        icon: EmploymentAuthorization,
        path: '/hr/emplyment-authorization',
      },
      {
        label: 'Discover more HR apps',
        icon: AddApp,
        path: '/hr/discover-more-hr-apps',
      },
    ],
    isExpanded: false,
  },
  {
    label: 'Insurance & Benefits',
    icon: Heart,
    isExpanded: false,
    items: [
      {
        label: 'FSA',
        icon: Fsa,
        path: '/insurance/fsa',
      },
      {
        label: 'HSA',
        icon: Hsa,
        path: '/insurance/hsa',
      },
      {
        label: 'Commuter',
        icon: Commuter,
        path: '/insurance/commuter',
      },
      {
        label: 'Global Pensions',
        icon: GlobalPension,
        path: '/insurance/global-pensions',
      },
      {
        label: "Workers' Comp",
        icon: WorkerComp,
        path: '/insurance/worker-comp',
      },
      {
        label: 'Discover more Insurance apps',
        icon: AddApp,
        path: '/insurance/discover',
      },
    ],
  },
  {
    label: 'IT Management',
    icon: Device,
    isExpanded: false,
    items: [
      {
        label: '', // ignored
        icon: Tasks, // ignored
        category: 'Device management',
      },
      {
        label: 'Devices',
        icon: Devices,
        path: '/it/devices',
      },
      {
        label: 'Discover more Device apps',
        icon: AddApp,
        path: '/it/discover-more-device-apps',
      },
      {
        label: '', // ignored
        icon: Tasks, // ignored
        category: 'Identity management',
      },
      {
        label: 'RPass',
        icon: RPass,
        path: '/it/r-pass',
      },
      {
        label: 'SSH Key Manager',
        icon: SSHKeypass,
        path: '/it/ssk-key-manager',
      },
      {
        label: 'Virtual LDAP',
        icon: VirtualLdap,
        path: '/it/virtual-ldap',
      },
      {
        label: 'Custom App',
        icon: CustomApp,
        path: '/it/custom-app',
      },
      {
        label: '', // ignored
        icon: Tasks, // ignored
        category: 'Automated Compliance',
      },
      {
        label: 'Automated Compliance',
        icon: AutomatedCompliance,
        path: '/it/auto-compliance',
      },
    ],
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
    items: [
      {
        label: 'All company apps',
        icon: AllApps,
        path: '/apps/company-apps',
      },
      {
        label: '',
        icon: AddApp,
        path: '/foo',
        category: 'Most used',
      },
      {
        label: 'Dropbox',
        icon: Dropbox,
        path: '/apps/dropbox',
      },
      {
        label: 'Duo',
        icon: Duo,
        path: '/apps/duo',
      },
      {
        label: 'Expensify',
        icon: Expensify,
        path: '/apps/expensify',
      },
      {
        label: 'Google',
        icon: Google,
        path: '/apps/google',
      },
      {
        label: 'Ironclad',
        icon: Ironclad,
        path: '/apps/ironclad',
      },
      {
        label: 'Jobvite',
        icon: Jobvite,
        path: '/apps/jobvite',
      },
      {
        label: 'Miscrosoft 365',
        icon: Microsoft365,
        path: '/apps/microsoft-365',
      },
      {
        label: 'Microsoft',
        icon: Microsoft,
        path: '/apps/microsoft',
      },
      {
        label: '',
        icon: AddApp,
        path: '/apps/fooo',
        category: 'Installation in progress',
      },
      {
        label: 'Buildkite',
        icon: Buildkite,
        path: '/apps/buildkite',
      },
      {
        label: 'Cloudflare',
        icon: Cloudflare,
        path: '/apps/cloudflare',
      },
      {
        label: 'DoorDash',
        icon: Doordash,
        path: '/apps/doordash',
      },
    ],
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
