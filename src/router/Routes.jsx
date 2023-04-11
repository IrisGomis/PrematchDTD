import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MolTableEventShowDelete from '../components/molecule/mol-event/MolTableEventShowDelete';
import MolFormEventCreate from '../components/molecule/mol-event/MolFormEventCreate';
import MolFormEventEdit from '../components/molecule/mol-event/MolFormEventEdit';

import MolTableRegionsShowDelete from '../components/molecule/mol-regions/MolTableRegionsShowDelete';
import MolFormRegionsCreate from '../components/molecule/mol-regions/MolFormRegionsCreate';
import MolFormRegionsEdit from '../components/molecule/mol-regions/MolFormRegionsEdit';

import MolTableProvincesShowDelete from '../components/molecule/mol-provinces/MolTableProvincesShowDelete';
import MolFormProvincesCreate from '../components/molecule/mol-provinces/MolFormProvincesCreate';
import MolFormProvincesEdit from '../components/molecule/mol-provinces/MolFormProvincesEdit';


import MolFormCodersEdit from '../components/molecule/mol-coders/MolFormCodersEdit';
import MolTableCodersShowDelete from '../components/molecule/mol-coders/MolTableCodersShowDelete';
import MolFormCodersCreate from '../components/molecule/mol-coders/MolFormCodersCreate';

import MolTableStacksShowDelete from '../components/molecule/mol-stacks/MolTableStacksShowDelete';
import MolFormStacksCreate from '../components/molecule/mol-stacks/MolFormStacksCreate';
import MolFormStacksEdit from '../components/molecule/mol-stacks/MolFormStacksEdit';

import MolFormLanguagesCreate from '../components/molecule/mol-languages/MolFormLanguagesCreate';
import MolTableLanguagesShowDelete from '../components/molecule/mol-languages/MolTableLanguagesShowDelete';
import MolFormLanguagesEdit from '../components/molecule/mol-languages/MolFormLanguagesEdit';

import MolFormSchoolsCreate from '../components/molecule/mol-school/MolFormSchoolsCreate';
import MolTableSchoolsShowDelete from '../components/molecule/mol-school/MolTableSchoolsShowDelete';
import MolFormSchoolsEdit from '../components/molecule/mol-school/MolFormSchoolsEdit';

import Layout from '../components/layout/Layout';

import Home from '../components/views/Home';
import Companies from '../components/views/Companies';
import Statistics from '../components/views/Statistics';
import Admin from '../components/views/Admin';
import Tareas from '../components/views/Taks';
import Schools from '../components/views/Schools';
;

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
            <Route path="/eventtable" element={<MolTableEventShowDelete />} />
            <Route path="/eventedit/:id" element={<MolFormEventEdit />} />

            <Route path="/regioncreate" element={<MolFormRegionsCreate />} />
            <Route path="/regiontable" element={<MolTableRegionsShowDelete />} />
            <Route path="/regionedit/:id" element={<MolFormRegionsEdit />} />

            <Route path="/provincecreate" element={<MolFormProvincesCreate />} />
            <Route path="/provincetable" element={<MolTableProvincesShowDelete />} />
            <Route path="/provincedit/:id" element={<MolFormProvincesEdit />} />

            <Route path="/codercreate" element={<MolFormCodersCreate />} />
            <Route path="/codertable" element={<MolTableCodersShowDelete />} />
            <Route path="/coderedit/:id" element={<MolFormCodersEdit />} />

            <Route path="/stackscreate" element={<MolFormStacksCreate />} />
            <Route path="/stackstable" element={<MolTableStacksShowDelete />} />
            <Route path="/stacksedit/:id" element={<MolFormStacksEdit />} />

            <Route path="/languagescreate" element={<MolFormLanguagesCreate />} />
            <Route path="/languagestable" element={<MolTableLanguagesShowDelete />} />
            <Route path="/languagesedit/:id" element={<MolFormLanguagesEdit />} />

            <Route path="/schoolscreate" element={<MolFormSchoolsCreate />} />
            <Route path="/schoolstable" element={<MolTableSchoolsShowDelete />} />
            <Route path="/schoolsedit/:id" element={<MolFormSchoolsEdit />} />

            </Routes>
          </Layout>
      </Router>
      </div>
    </div>
  );
}

export default App;
