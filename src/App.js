import logo from './logo.svg';
import './App.css';
import { Btn } from './button';
import { Reactb } from './ReactBenifits';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Reactb/>
      <Btn/> 
      </header>
    </div>
  );
}

export default App;
