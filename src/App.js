import logo from './logo.svg';
import './App.css';

function App() {
  // Comment

  console.log(1);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Adios mundo <code>src/App.js</code> and save to reload.
        </p>
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
