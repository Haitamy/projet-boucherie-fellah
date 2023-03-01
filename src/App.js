import './App.sass';
import Header from './component/Header/Header';
import Sec1 from './component/Sec1/Sec1';
import Map from './component/Map/Map';
import Footer from './component/Footer/Footer';
import Produits from './component/Produits/Produits';

function App() {
  return (
    <div className="App">
      <Header />
      <Sec1 />
      <Produits />
      <Map />
      <Footer />
    </div>
  );
}

export default App;

