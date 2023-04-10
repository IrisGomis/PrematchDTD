import React from 'react';
import MolFormStacksCreate from '../molecule/mol-stacks/MolFormStacksCreate';
import MolFormLenguageCreate from '../molecule/mol-languages/MolFormLanguagesCreate';
import MolFormRegionsCreate from '../molecule/mol-regions/MolFormRegionsCreate';


const Admin = () => {
  return (
   <div>
    <MolFormStacksCreate />
    <MolFormLenguageCreate />
    <MolFormRegionsCreate />
   </div>
  )
}

export default Admin