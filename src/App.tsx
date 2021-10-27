import { FormProvider } from './context/FormContext';
import { Router } from './router';

const App: React.FC = () => {
  return (
    <FormProvider>
      <Router />
    </FormProvider>
  )
}

export default App;