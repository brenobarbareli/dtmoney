import { Container } from './styles';
import incomeImg from '../../assets/entradas.svg';
import outcomeImg from '../../assets/saidas.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';
import { useContext } from 'react';

export function Summary() {
  const transactions = useContext(TransactionsContext); //importação do Context
  console.log(transactions);
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt='Entradas' />
        </header>
        <strong>R$10000,00</strong>
      </div>
      <div>
        <header>
          <p>Entradas</p>
          <img src={outcomeImg} alt='Saídas' />
        </header>
        <strong>-R$5500,00</strong>
      </div>
      <div className='highlight-background'>
        <header>
          <p>Entradas</p>
          <img src={totalImg} alt='Total' />
        </header>
        <strong>R$4500,00</strong>
      </div>
    </Container>
  );
}
