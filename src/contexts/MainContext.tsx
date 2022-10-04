import { ModelUserLogin } from 'models/user'
import React, { useReducer, Reducer, useEffect, useCallback, useMemo } from 'react'
import { IContextProviderProps } from './Types'

export const TEST = 'TEST'
export const LOGINED = 'LOGINED'

interface TestModel {
  name: string
}

interface AppState {
  testData: TestModel | null
  authenticated: boolean
  testDataSetter: (data: TestModel) => void
  loginedSetter: (data: ModelUserLogin) => void
  userType: string | null
}

const initialState: AppState = {
  testData: null,
  authenticated: false,
  testDataSetter() {
    throw new Error('Context not yet initial')
  },
  loginedSetter() {
    throw new Error('Context not yet initial')
  },
  userType: null,
}

const MainContext = React.createContext<AppState>(initialState)
MainContext.displayName = 'MainContext'
type Action =
  | { type: typeof LOGINED; payload: ModelUserLogin }
  | { type: typeof TEST; payload: TestModel }

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case LOGINED:
      return {
        ...state,
        userLogin: action.payload,
        authenticated: true,
        userType: action.payload.user.userType,
      }
    case TEST:
      return {
        ...state,
        testMode: action.payload,
      }
    default:
      return state
  }
}

const MainContextProvider = (props: IContextProviderProps) => {
  let [state, dispatch] = useReducer<Reducer<AppState, Action>>(reducer, initialState)
  const testDataSetter = useCallback((data: TestModel) => {
    dispatch({
      type: TEST,
      payload: { ...data },
    })
  }, [])
  const loginedSetter = useCallback((data: ModelUserLogin) => {
    dispatch({
      type: LOGINED,
      payload: {
        ...data,
      },
    })
  }, [])
  const value: AppState = useMemo(
    () => ({
      ...state,
      testDataSetter,
      loginedSetter,
    }),
    [loginedSetter, state, testDataSetter],
  )
  useEffect(() => {})
  return <MainContext.Provider value={value}>{props.children}</MainContext.Provider>
}
export { MainContext, MainContextProvider }
