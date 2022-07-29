import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div>
      <header>
      <NavBar></NavBar>
      </header>
      <ItemListContainer>
      </ItemListContainer>

    </div>
  );
}

export default App;
