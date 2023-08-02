import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImg from '../../assets/logo.svg'

export function Header() {
  return(
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <div>
          <NewTransactionButton>Nova transação</NewTransactionButton>
          <NewTransactionButton>Nova transação</NewTransactionButton>
        </div>
      </HeaderContent>
    </HeaderContainer>
  )
}