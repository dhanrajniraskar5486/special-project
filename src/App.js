import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <fragment>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Benifits of Using React..</h1>
        <ol>
          <li>
            component based architecture
          </li>
          <li>
            Virtual DOM for efficient update
          </li>
          <li>
            Rich ecosystem and community
          </li>
          <li>
            Cross platform development
          </li>
          <li>
            Strong community support
          </li>
        </ol>
        <button>
          Get Started..
        </button>

      </header>
     
    </div>
    
    </fragment>
  );
}

export default App;
