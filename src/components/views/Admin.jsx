import React from 'react';
import MolFormStacksCreate from '../molecule/mol-stacks/MolFormStacksCreate';
import MolFormLenguageCreate from '../molecule/mol-languages/MolFormLanguagesCreate';
import MolFormRegionsCreate from '../molecule/mol-regions/MolFormRegionsCreate';
import MolFormProvincesCreate from '../molecule/mol-provinces/MolFormProvincesCreate';


const Admin = () => {
  return (
   <div>
    <MolFormStacksCreate />
    <MolFormLenguageCreate />
    <MolFormRegionsCreate />
    <MolFormProvincesCreate/>
   </div>
  )
}

export default Admin