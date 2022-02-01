import logo from './logo.svg';
import './App.css';
import ReactPlayer from "react-player"

import RegisterContainer from './containers/RegisterContainer';

function App() {
  return (
    <>
    <div>
    {/* <ReactPlayer 
    url ="https://soundcloud.com/andrewcaldermusic/do-it-right"/> */}
    <h2> Register to PleaseListenToThis </h2>
    </div>
    < RegisterContainer />
    </>
  );
}
export default App;
