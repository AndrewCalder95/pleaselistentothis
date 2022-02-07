import './App.css';
import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom"
import AuthService from "./services/authService";
import Signup from "./components/Signup"
import Login from "./components/Login"
import Home from "./components/Home"
import Discover from "./components/DiscoverPage/Discover"
import MyTracks from "./components/MyTracks/MyTracksPage"
import UploadPage from './components/Upload/UploadPage';
import IndividualTrack from "./components/IndividualTrack"
import View from "./components/MyTracks/View"
import ReviewPage from './components/Reviews/ReviewPage';
import ActualReview from './components/Reviews/ActualReview';



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
        {/* <img src="/img/listentothis_logo.png" alt="logo" height ="120px"/> */}
        <h1 id ="main title">ListenToThis <i class="fas fa-headphones-alt fa-1x"></i></h1>

    <div>
      <nav>
        <div class="navflexcontainer">
          <li>
            <Link to={"/"}>
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
          {/* {currentUser && (
            <li>
              <Link to={"/myreviews"}>
                My Reviews
              </Link>
            </li>
          )} */}
          {currentUser && (
            <li>
              <Link to={"/upload"}>
                Upload
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div class="navflexcontainer2">
            <li>
              <a href="/login" onClick={logOut}>
                Logout
              </a>
            </li>
          </div>
        ) : (
          <div class="navflexcontainer2">
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

    <div id ="mainbody">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/mytracks" element={<MyTracks />} />
          <Route exact path="/track/:id" element={<IndividualTrack/>} component={<IndividualTrack/>}/> 
          <Route exact path="/reviewed/track/:id" element={<ActualReview/>} component={<ActualReview/>}/> 
          <Route exact path="/track/:id" element={<IndividualTrack/>} component={<IndividualTrack/>}/> 
          <Route exact path="/view/:id" element={<View/>} component={<View/>}/> 
          <Route exact path="/review/:id" element={<ReviewPage/>} component={<ReviewPage/>}/> 
          {/* <Route path="/track/:id"></Route>   */}
        </Routes>
      </div>
    </>
  );
}

export default App;