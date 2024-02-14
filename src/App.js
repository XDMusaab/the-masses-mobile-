// App.js
import React, { useState } from 'react';
import './App.css';
import Login from './components/login';
import IDInfo from './components/id';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setUsername(username);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setUsername('');
    setLoggedIn(false);
  };
  const logo = (logo) =>{
    logo= ['123']
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {loggedIn ? (
          <div>
            <IDInfo username={username} />
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </header>
    </div>
  );
}

export default App;
