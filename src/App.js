import logo from './logo.svg';
import './App.css';
import Example from './components/Example'; // default
// import { Example } from './components/Example'; // nombrado
// import * as Todo from './components/Example'; // everthing as

function App() {
  // Comment

  console.log(1);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Este cambio es el chido <code>src/App.js</code> and save to reload.
        </p> 
        <p>
          espera we
        </p>
        <p>
          no te comas mis cambios
          Adios mundo <code>src/App.js</code> and save to reload.
        </p>
        <Example />
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
          Learn React quickly
        </a>

      </header>
    </div>

);
}

export default App;
