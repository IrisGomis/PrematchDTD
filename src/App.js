import React from 'react';
import './App.css';
import 'tailwindcss/tailwind.css';
import  Routes from './router/Routes';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <div className="App">
       <UserProvider backendUrl={process.env.REACT_APP_BACKEND_URL}>
       <Routes/>
       </UserProvider>
    </div>
  );
}

export default App;
