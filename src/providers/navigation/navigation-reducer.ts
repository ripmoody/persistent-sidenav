import { footerNavItems } from './constants/footer'
import { headerNavItems } from './constants/header'

export type NavigationState = {
  items: {
    header: NavItem[]
    footer: NavItem[]
  }
  context: {
    /**
     * Whether the navigation is collapsed or not.
     * This is done dynamically/responsively based on the screen size and context.
     */
    isCollapsed: boolean
    /**
     * Whether the navigation has been explicitly collapsed by the user.
     * This is used to prevent the navigation from automatically expanding.
     */
    isForceCollapsed: boolean
    /**
     * When the screen is below 500px, the navigation is hidden and accessible via the top nav.
     */
    isHidden: boolean
  }
}

export type NavigationAction =
  | { type: 'reset' }
  | { type: 'set-force-collapsed'; payload: boolean }
  | { type: 'set-collapsed'; payload: boolean }
  | { type: 'set-hidden'; payload: boolean }

export const initialState: NavigationState = {
  items: {
    header: headerNavItems,
    footer: footerNavItems,
  },
  context: {
    isCollapsed: false,
    isForceCollapsed: false,
    isHidden: false,
  },
}

export const navigationReducer = (
  state: NavigationState,
  action: NavigationAction,
) => {
  switch (action.type) {
    case 'set-hidden':
      return {
        ...state,
        context: {
          ...state.context,
          isHidden: action.payload,
        },
      }

    case 'set-force-collapsed':
      return {
        ...state,
        context: {
          ...state.context,
          isForceCollapsed: action.payload,
        },
      }

    case 'set-collapsed':
      return {
        ...state,
        context: {
          ...state.context,
          isCollapsed: action.payload,
        },
      }

    case 'reset':
      return initialState

    default:
      return state
  }
}
