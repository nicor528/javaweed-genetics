import logo from './logo.svg';
import './App.css';
import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <nav>
        <NavBar></NavBar>
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Container></Container>
    </div>
  );
}

export default App;
