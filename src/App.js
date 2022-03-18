import logo from './logo.svg';
import './App.css';
import './css/style.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://softshorelab.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Softshore lab
        </a>
      </header>
      <Main />
      <Footer/>
    </div>
  );
}

export default App;
