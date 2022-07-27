import './App.css';
import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div>
      <header>
      <NavBar></NavBar>
      </header>
      <ItemListContainer text="hola"></ItemListContainer>
    </div>
  );
}

export default App;
