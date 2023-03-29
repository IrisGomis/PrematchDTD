import './App.css';
import 'tailwindcss/tailwind.css';
//import MolForm from './components/molecule/MolForm';
import Drawer from './components/atome/drawer/Drawer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <MolForm/> */}
       <Drawer />
      </header>
    </div>
  );
}

export default App;
