import { NavLink } from 'react-router-dom';
import { IVenda } from '../Context/DataContext';

type VendaItemProps = {
  venda: IVenda;
};

const SaleItem = ({ venda }: VendaItemProps) => {
  return (
    <div className="venda box">
      <NavLink to={`/venda/${venda.id}`} style={{ fontFamily: 'monospace' }}>
        {venda.id}
      </NavLink>
      <div>{venda.nome}</div>
      <div>
        {venda.preco.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}
      </div>
    </div>
  );
};

export default SaleItem;
