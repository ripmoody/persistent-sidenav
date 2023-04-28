import { Dispatch, createContext, useContext, useMemo, useReducer } from 'react'
import {
  NavigationAction,
  NavigationState,
  initialState,
  navigationReducer,
} from './navigation-reducer'

export type NavigationContextProps = {
  state: NavigationState
  dispatch: Dispatch<NavigationAction>
}

const NavigationContext = createContext({} as NavigationContextProps)

export const NavigationProvider = ({ children }: Children) => {
  const [state, dispatch] = useReducer(navigationReducer, initialState)

  const memo = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])

  return (
    <NavigationContext.Provider value={memo}>
      {children}
    </NavigationContext.Provider>
  )
}

export const useNavigation = () => useContext(NavigationContext)
