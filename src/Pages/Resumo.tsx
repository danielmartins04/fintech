import { useData } from '../Context/DataContext';

const Resumo = () => {
  const { data } = useData();

  if (data === null) return null;
  return (
    <section>
      <div className="resumo flex mb">
        <div className="box">
          <h2>Vendas</h2>
          <span>
            {data
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>

        <div className="box">
          <h2>Recebido</h2>
          <span>
            {data
              .filter((item) => item.status === 'pago')
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>

        <div className="box">
          <h2>Processando</h2>
          <span>
            {data
              .filter((item) => item.status === 'processando')
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>
      </div>
      <div className="box">Gráficos</div>
    </section>
  );
};

export default Resumo;
