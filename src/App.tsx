import React from 'react';
//import { Outlet } from "react-router-dom";
import Home from './components/Home';
import './App.css';
import Register from './components/Register';



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Bienvenue sur WinteRent
        </h1>
        <Home />
        <Register />
      </header>
    </div>
  );
}

export default App;
