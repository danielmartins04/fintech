import fintech from '../assets/fintech.svg';
import summary from '../assets/icons/resumo.svg';
import sales from '../assets/icons/vendas.svg';
import webhooks from '../assets/icons/webhooks.svg';
import config from '../assets/icons/configuracoes.svg';
import phoneNumber from '../assets/icons/contato.svg';
import exit from '../assets/icons/sair.svg';

const Sidenav = () => {
  return (
    <nav className="sidenav box bg-3">
      <img src={fintech} alt="logo fintech" />
      <ul>
        <li>
          <span>
            <img src={summary} alt="" />
          </span>
          <a href="">Resumo</a>
        </li>
        <li>
          <span>
            <img src={sales} alt="" />
          </span>
          <a href="">Vendas</a>
        </li>
        <li>
          <span>
            <img src={webhooks} alt="" />
          </span>
          Webhooks
        </li>
        <li>
          <span>
            <img src={config} alt="" />
          </span>
          Configurações
        </li>
        <li>
          <span>
            <img src={phoneNumber} alt="" />
          </span>
          Contato
        </li>
        <li>
          <span>
            <img src={exit} alt="" />
          </span>
          Sair
        </li>
      </ul>
    </nav>
  );
};

export default Sidenav;
