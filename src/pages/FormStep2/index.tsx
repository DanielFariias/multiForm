import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import SelectOptions from '../../components/SelectOptions';
import Theme from '../../components/Theme';
import { FormActions, useForm } from '../../context/FormContext';

import * as C from './styles';

const FormStep2: React.FC = () => {
  const history = useHistory()

  const { state, dispatch } = useForm()

  const handleNextStep = () => {
    if (state.name !== '') {
      history.push('/step3')
    } else {
      alert("Digite seu nome!")
    }
  }

  useEffect(() => {
    if (state.name === '') {
      history.push('/')
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2,
      })
    }
  }, [])

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    })
  }

  return (
    <Theme>
      <C.Container>
        <p>Passo 2/3</p>
        <h2>{state.name}, o que melhor descreve você?</h2>
        <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente.</p>

        <hr />

        <SelectOptions
          title="Sou Iniciante"
          description="Comecei a programar há pouco tempo"
          icon="🥳"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />

        <SelectOptions
          title="Sou Programador"
          description="Ja programo a 2 anos ou mais"
          icon="😎"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />

        <Link to='/' className="backButton" >Voltar</Link>
        <button onClick={handleNextStep}>Proximo</button>

      </C.Container>
    </Theme >
  )
}

export default FormStep2;