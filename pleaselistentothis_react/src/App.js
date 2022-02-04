import './App.css';
import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom"
import AuthService from "./services/authService";
import Signup from "./components/Signup"
import Login from "./components/Login"
import Home from "./components/Home"
import Discover from "./components/DiscoverPage/Discover"
import MyTracks from "./components/MyTracks/MyTracks"
import UploadPage from './components/Upload/UploadPage';
import IndividualTrack from "./components/IndividualTrack"
import TrackService from "./services/trackService"



function App() {
  const [currentUser, setCurrentUser] = useState(undefined)
  

  useEffect(() => {
    const user = AuthService.getCurrentUser();
        

    if (user) {
      setCurrentUser(user);
    }
  }, []);


  const logOut = () => {
    AuthService.logout();
  };

  return (
  <>
  <header id="header" >
    <h1> PleaseListenToThis</h1>

    <div id="navbar">
      <nav >
        <div class="navflexcontainer">
          <li>
            <Link to={"/home"}>
              Home
            </Link>
          </li>

          {currentUser && (
            <li>
              <Link to={"/discover"}>
                Discover
              </Link>
            </li>
          )}
          {currentUser && (
            <li>
              <Link to={"/mytracks"}>
                My Tracks
              </Link>
            </li>
          )}
          {currentUser && (
            <li>
              <Link to={"/upload"}>
                Upload
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div class="navflexcontainer">
            <li>
              <a href="/login" onClick={logOut}>
                Logout
              </a>
            </li>
          </div>
        ) : (
          <div class="navflexcontainer">
            <li>
              <Link to={"/login"}>
                Login
              </Link>
            </li>

            <li>
              <Link to={"/signup"}>
                Sign up
              </Link>
            </li>
          </div>
        )}
      </nav>
    </div>

    </header>

    <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/mytracks" element={<MyTracks />} />
          <Route exact path="/track/:id" element={<IndividualTrack/>} component={<IndividualTrack/>}/> 
          {/* <Route path="/track/:id"></Route>   */}
        </Routes>
      </div>
    </>
  );
}

export default App;