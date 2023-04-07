import React from 'react';
import './App.css';
import 'tailwindcss/tailwind.css';
import  Routes from './router/Routes';

function App() {
  return (
    <div className="App">
      <div className="App-header">
       <Routes/>
      </div>
    </div>
  );
}

export default App;
