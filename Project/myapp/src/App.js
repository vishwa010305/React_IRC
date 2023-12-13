import React from 'react';
import './assets/css/App.css';
import './assets/css/LoginSignup.css'
import './assets/css/Nav.css'
import Nav from './components/NavBar.js';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home.js';
import Login_SignUp from './components/Login_SignUp.jsx';


function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='' element={<Home/>}/> 
      <Route path='Login_SignUp' element={<Login_SignUp/>}/>
    </Routes>
    </>
  );
}

export default App;