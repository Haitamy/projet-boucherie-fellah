import './App.sass';
import Header from './component/Header/Header';
import Sec1 from './component/Sec1/Sec1';
import Produits from './component/Produits/Produits';
import Map from './component/Map/Map';

function App() {
  return (
    <div className="App">
      <Header />
      <Sec1 />
      <Produits />
      <Map />
    </div>
  );
}

export default App;

