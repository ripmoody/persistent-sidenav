import { cloneDeep } from 'lodash'
import { footerNavItems } from './constants/footer'
import { headerNavItems } from './constants/header'
import type { ExpandableNavItem } from './constants/main'
import { mainNavItems } from './constants/main'

export type NavigationState = {
  items: {
    header: NavItem[]
    footer: NavItem[]
    main: ExpandableNavItem[]
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
  | { type: 'toggle-item-expanded'; payload: ExpandableNavItem }
  | {
      type: 'set-item-expanded'
      payload: { item: ExpandableNavItem; isExpanded: boolean }
    }
  | { type: 'expand-all' }
  | { type: 'collapse-all' }
  | { type: 'expand-active-section'; payload: string }
  | { type: 'add-item-favorite'; payload: NavItem }
  | { type: 'remove-item-favorite'; payload: NavItem }

export const initialState: NavigationState = {
  items: {
    header: headerNavItems,
    footer: footerNavItems,
    main: mainNavItems,
  },
  context: {
    isCollapsed: true,
    isForceCollapsed: true,
    isHidden: false,
  },
}

export const navigationReducer = (
  state: NavigationState,
  action: NavigationAction,
) => {
  switch (action.type) {
    case 'add-item-favorite': {
      const mainDeepClone = cloneDeep(state.items.main) as ExpandableNavItem[]
      mainDeepClone[0].items.push(action.payload)
      mainDeepClone[0].items.sort((a, b) => a.label.localeCompare(b.label))

      const main = mainDeepClone.map((item) => {
        return {
          ...item,
          items: item.items.map((subItem) => {
            if (subItem.label === action.payload.label) {
              return {
                ...subItem,
                isFavorite: true,
              }
            }
            return subItem
          }),
        }
      })

      main[0].isExpanded = true

      return {
        ...state,
        items: {
          ...state.items,
          main,
        },
      }
    }

    case 'remove-item-favorite': {
      const mainDeepClone = cloneDeep(state.items.main) as ExpandableNavItem[]
      mainDeepClone[0].items = mainDeepClone[0].items.filter(
        (item) => item.label !== action.payload.label,
      )

      const main = mainDeepClone.map((item) => {
        return {
          ...item,
          items: item.items.map((subItem) => {
            if (subItem.label === action.payload.label) {
              return {
                ...subItem,
                isFavorite: false,
              }
            }
            return subItem
          }),
        }
      })

      return {
        ...state,
        items: {
          ...state.items,
          main,
        },
      }
    }

    case 'expand-active-section': {
      const hasActiveChild = state.items.main.some((item) =>
        item.items.some((subItem) => subItem.label === action.payload),
      )

      if (hasActiveChild) {
        return {
          ...state,
          items: {
            ...state.items,
            main: state.items.main.map((item) => ({
              ...item,
              isExpanded: item.items.some(
                (subItem) => subItem.label === action.payload,
              ),
            })),
          },
        }
      }

      return state
    }

    case 'expand-all': {
      return {
        ...state,
        items: {
          ...state.items,
          main: state.items.main.map((item) => ({
            ...item,
            isExpanded: true,
          })),
        },
      }
    }

    case 'collapse-all': {
      return {
        ...state,
        items: {
          ...state.items,
          main: state.items.main.map((item) => ({
            ...item,
            isExpanded: false,
          })),
        },
      }
    }

    case 'toggle-item-expanded': {
      return {
        ...state,
        items: {
          ...state.items,
          main: state.items.main.map((item) => ({
            ...item,
            isExpanded:
              item.label === action.payload.label
                ? !action.payload.isExpanded
                : item.isExpanded,
          })),
        },
      }
    }

    case 'set-item-expanded': {
      return {
        ...state,
        items: {
          ...state.items,
          main: state.items.main.map((item) => ({
            ...item,
            isExpanded:
              item.label === action.payload.item.label
                ? action.payload.isExpanded
                : item.isExpanded,
          })),
        },
      }
    }

    case 'set-hidden': {
      return {
        ...state,
        context: {
          ...state.context,
          isHidden: action.payload,
        },
      }
    }

    case 'set-force-collapsed': {
      return {
        ...state,
        context: {
          ...state.context,
          isForceCollapsed: action.payload,
        },
      }
    }

    case 'set-collapsed': {
      return {
        ...state,
        context: {
          ...state.context,
          isCollapsed: action.payload,
        },
      }
    }

    case 'reset': {
      return initialState
    }

    default: {
      return state
    }
  }
}
