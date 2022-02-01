import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import Navbar from './components/Navbar';
import Register from "./components/Register"
import Login from "./components/Login"
import Home from "./components/Home"
import Discover from "./components/Discover"


function App() {
  return (
    <main>
    <h1>PleaseListenToThis</h1>
      <Navbar />
        <Routes> 
          <Route path='/' element={<Home/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/discover' element={<Discover/>} />
        </Routes>
      </main>
  );
}

export default App;
