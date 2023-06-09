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
  data: {
    filteredItems: ExpandableNavItem[]
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
    /**
     * The controlled value of the search input.
     */
    searchValue: string
  }
}

export type NavigationAction =
  | { type: 'reset' }
  | { type: 'set-force-collapsed'; payload: boolean }
  | { type: 'set-collapsed'; payload: boolean }
  | { type: 'set-hidden'; payload: boolean }
  | { type: 'toggle-item-expanded'; payload: ExpandableNavItem }
  | { type: 'expand-all' }
  | { type: 'collapse-all' }
  | { type: 'set-filtered-items' }
  | { type: 'set-search-value'; payload: string }
  | { type: 'expand-active-section'; payload: string }

export const initialState: NavigationState = {
  items: {
    header: headerNavItems,
    footer: footerNavItems,
    main: mainNavItems,
  },
  data: {
    filteredItems: mainNavItems,
  },
  context: {
    isCollapsed: false,
    isForceCollapsed: false,
    isHidden: false,
    searchValue: '',
  },
}

export const navigationReducer = (
  state: NavigationState,
  action: NavigationAction,
) => {
  switch (action.type) {
    case 'expand-active-section': {
      const hasActiveChild = state.items.main.some((item) =>
        item.items.some((subItem) => subItem.label === action.payload),
      )

      if (hasActiveChild) {
        return {
          ...state,
          data: {
            ...state.data,
            filteredItems: state.data.filteredItems.map((item) => ({
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

    case 'set-search-value': {
      return {
        ...state,
        context: {
          ...state.context,
          searchValue: action.payload,
        },
      }
    }

    case 'set-filtered-items': {
      const filteredItems: ExpandableNavItem[] = []

      for (const rootItem of state.items.main) {
        const filteredSubItems = rootItem.items.filter((item) =>
          item.label.toLowerCase().includes(state.context.searchValue),
        )

        if (filteredSubItems.length > 0) {
          filteredItems.push({
            ...rootItem,
            items: filteredSubItems,
          })
        }
      }

      return {
        ...state,
        data: {
          ...state.data,
          filteredItems,
        },
      }
    }

    case 'expand-all': {
      return {
        ...state,
        data: {
          ...state.data,
          filteredItems: state.data.filteredItems.map((item) => ({
            ...item,
            isExpanded: true,
          })),
        },
      }
    }

    case 'collapse-all': {
      return {
        ...state,
        data: {
          ...state.data,
          filteredItems: state.data.filteredItems.map((item) => ({
            ...item,
            isExpanded: false,
          })),
        },
      }
    }

    case 'toggle-item-expanded': {
      return {
        ...state,
        data: {
          ...state.data,
          filteredItems: state.data.filteredItems.map((item) => ({
            ...item,
            isExpanded:
              item.label === action.payload.label
                ? !action.payload.isExpanded
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
