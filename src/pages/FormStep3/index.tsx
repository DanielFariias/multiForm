import { ChangeEvent, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Theme from '../../components/Theme';
import { FormActions, useForm } from '../../context/FormContext';

import * as C from './styles';

const FormStep3: React.FC = () => {
  const history = useHistory()

  const { state, dispatch } = useForm()

  useEffect(() => {
    if (state.name === '') {
      history.push('/')
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3,
      })
    }
  }, [])

  const handleNextStep = () => {
    if (state.email !== '' && state.github !== '') {
      console.log(state)
    } else {
      alert('Preencha os campos com seu Github e seu Email.')
    }
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    })
  }

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value,
    })
  }

  return (
    <Theme>
      <C.Container>
        <p>Passo 3/3</p>
        <h2>Legal {state.name}, onde te encontramos?</h2>
        <p>Preencha com seus dados os campos abaixo para entrarmos em contato.</p>

        <hr />

        <label>
          Qual seu e-mail?
          <input
            type="email"
            value={state.email}
            onChange={handleEmailChange}
            autoFocus
          />

        </label>

        <label>
          Qual seu Github?
          <input
            type="url"
            value={state.github}
            onChange={handleGithubChange}
            autoFocus
          />

        </label>

        <Link to='/step2' className="backButton" >Voltar</Link>
        <button onClick={handleNextStep}>Finalizar Cadastro</button>

      </C.Container>
    </Theme>
  )
}

export default FormStep3