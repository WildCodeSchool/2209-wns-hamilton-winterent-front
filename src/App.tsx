import React from 'react';
//import { Outlet } from "react-router-dom";
import Home from './components/Home';
import './App.css';



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Bienvenue sur WinteRent
        </h1>
        <Home />
        <form>
          <h4>Sign up</h4>
          <div>
            <input type="text" className="input" placeholder="Name" />
            <input type="email" className="input" placeholder="Email" />
            <input type="password" className="input" placeholder="Password" />
          </div>
          <button className="submit-btn">S'inscrire</button>
        </form>
        <div>Log in</div>
      </header>
    </div>
  );
}

export default App;
