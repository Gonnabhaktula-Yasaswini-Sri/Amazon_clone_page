import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';



//to import images
//const homeImage = require('../assets/images/name.jpg');

function App() {
  return (
    <div className="App">
      <Header/>
       <Footer/>
    </div>
  );
}

export default App;

{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to react development Yasaswini sri
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
      </header> */}