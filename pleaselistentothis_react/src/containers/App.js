import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom"

import HomeContainer from './containers/HomeContainer';

function App() {
  return (
    //  <header> 
    // <h1>PleaseListenToThis</h1> 
    // </header>
    <Router>
    <main>
      <nav>
        <ul>
          <li><a href="/">HomeContainer</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </main>
    </Router>
   
    // < HomeContainer />
    // </>
  );
}
export default App;
