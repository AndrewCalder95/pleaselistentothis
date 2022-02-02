import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom"
import AuthService from "./services/authService";
import Signup from "./components/Signup"
import Login from "./components/Login"
import Home from "./components/Home"


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
    <h1> PleaseListenToThis</h1>
    <div>
      <nav>
        <div>
          <li>
            <Link to={"/home"}>
              Home
            </Link>
          </li>

          {/* {currentUser && (
            <li className="nav-item">
              <Link to={"/private"} className="nav-link">
                Private
              </Link>
            </li>
          )} */}
        </div>

        {currentUser ? (
          <div>
            <li>
              <a href="/login" onClick={logOut}>
                Logout
              </a>
            </li>
          </div>
        ) : (
          <div>
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

      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
    </>
  );
}

export default App;
