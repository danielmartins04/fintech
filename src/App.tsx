import DateRange from "./Components/DateRange";
import Header from "./Components/Header";
import Sidenav from "./Components/Sidenav";
import { DataContextProvider } from "./Context/DataContext";
import Resumo from "./Pages/Resumo";
import "./Style.css";

function App() {
  return (
    <DataContextProvider>
      <div>
        <Sidenav />
        <main>
          <DateRange />
          <Header />
          <Resumo />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
