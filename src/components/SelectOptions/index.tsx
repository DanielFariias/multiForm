import * as C from './styles';

interface Props {
  title: string
  description: string
  icon: string
  selected: boolean
  onClick: () => void
}

const SelectOptions: React.FC<Props> = ({ title, description, icon, selected, onClick }) => {
  return (
    <C.Container selected={selected} onClick={onClick}>
      <C.Icon>{icon}</C.Icon>
      <C.Info>
        <C.Title>{title}</C.Title>
        <C.Description>{description}</C.Description>
      </C.Info>
    </C.Container>
  )
}

export default SelectOptions;