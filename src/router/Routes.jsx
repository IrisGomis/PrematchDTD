import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MolTableEventShowDeletecpoy from '../components/molecule/mol-event/MolTableEventShowDeletecopy';
import MolFormEventCreate from '../components/molecule/mol-event/MolFormEventCreate';
import MolFormEventEdit from '../components/molecule/mol-event/MolFormEventEdit';

import MolFormCodersEdit from '../components/molecule/mol-coders/MolFormCodersEdit';
import MolTableCodersShowDelete from '../components/molecule/mol-coders/MolTableCodersShowDelete';
import MolFormCodersCreate from '../components/molecule/mol-coders/MolFormCodersCreate';

import Layout from '../components/layout/Layout';

import Home from '../components/views/Home';
import Companies from '../components/views/Companies';
import Statistics from '../components/views/Statistics';
import Admin from '../components/views/Admin';
import Tareas from '../components/views/Taks';
import Schools from '../components/views/Schools';
function App() {
  return (
    <div className="App">
      <div className="App-header">
       <Router>
          <Layout>
            <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/taks" element={<Tareas />} />
            <Route path="/schools" element={<Schools />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/statistics" element={<Statistics />} />

            <Route path="/eventcreate" element={<MolFormEventCreate />} />
            <Route path="/eventtable" element={<MolTableEventShowDeletecpoy />} />
            <Route path="/eventedit/:id" element={<MolFormEventEdit />} />

            <Route path="/codercreate" element={<MolFormCodersCreate />} />
            <Route path="/codertable" element={<MolTableCodersShowDelete />} />
            <Route path="/coderedit/:id" element={<MolFormCodersEdit />} />

            </Routes>
          </Layout>
      </Router>
      </div>
    </div>
  );
}

export default App;
