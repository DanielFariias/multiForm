import { ChangeEvent, useEffect } from 'react';
import { useHistory } from 'react-router';
import Theme from '../../components/Theme';
import { FormActions, useForm } from '../../context/FormContext';

import * as C from './styles';

const FormStep1: React.FC = () => {
  const history = useHistory()

  const { state, dispatch } = useForm()

  const handleNextStep = () => {
    if (state.name !== '') {
      history.push('/step2')
    } else {
      alert("Digite seu nome!")
    }
  }
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    })
  }

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    })
  }, [dispatch])

  return (
    <Theme>
      <C.Container>
        <p>Passo 1/3</p>
        <h2>Preencha o campo abaixo com seu nome completo</h2>
        <p>Preencha o campo abaixo com seu nome completo.</p>

        <hr />

        <label>
          Seu nome completo:
          <input
            type="text"
            value={state.name}
            onChange={handleNameChange}
            autoFocus
          />

        </label>
        <button onClick={handleNextStep}>Proximo</button>

      </C.Container>
    </Theme>
  )
}

export default FormStep1;