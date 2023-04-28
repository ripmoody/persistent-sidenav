export type NavigationState = {}

export type NavigationAction = { type: 'reset' }

export const initialState: NavigationState = {}

export const navigationReducer = (
  state: NavigationState,
  action: NavigationAction,
) => {
  switch (action.type) {
    case 'reset':
      return initialState

    default:
      return state
  }
}
