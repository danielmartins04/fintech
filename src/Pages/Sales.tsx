import SaleItem from '../Components/SaleItem';
import { useData } from '../Context/DataContext';

const Sales = () => {
  const { data } = useData();

  if (data === null) return null;

  return (
    <ul>
      {data.map((venda) => (
        <li key={venda.id}>
          <SaleItem venda={venda} />
        </li>
      ))}
    </ul>
  );
};

export default Sales;
