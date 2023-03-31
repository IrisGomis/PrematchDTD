//import './App.css';
import 'tailwindcss/tailwind.css';
import AtomSearch from './components/atome/header/AtomSearch';
import AtomHour from './components/atome/header/AtomHour';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AtomSearch/>
        <AtomHour/>      
      </header>
    </div>
  );
}

export default App;
