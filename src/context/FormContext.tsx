import { createContext, useContext, useReducer } from "react";

interface State {
  currentStep: number,
  name: string,
  level: 0 | 1,
  email: string,
  github: string,
}
interface Action {
  type: FormActions
  payload: any
}
interface Context {
  state: State
  dispatch: (action: Action) => void
}

const initialData: State = {
  currentStep: 0,
  name: '',
  level: 0,
  email: '',
  github: '',
}

const FormContext = createContext<Context | undefined>(undefined)

export enum FormActions {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGithub
}
const FormReducer = (state: State, action: Action) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload }

    case FormActions.setName:
      return { ...state, name: action.payload }

    case FormActions.setLevel:
      return { ...state, level: action.payload }

    case FormActions.setEmail:
      return { ...state, email: action.payload }

    case FormActions.setGithub:
      return { ...state, github: action.payload }

    default: {
      return state
    }
  }
}

// Component
export const FormProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(FormReducer, initialData)
  const value = { state, dispatch }

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  )
}

// Hook
export const useForm = () => {
  const context = useContext(FormContext)
  if (context === undefined) {
    throw new Error('useForm necessita ser utilizado dentro de FormProvider.')
  }
  return context
}