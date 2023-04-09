import React from 'react';
import MolFormStacksCreate from '../molecule/mol-stacks/MolFormStacksCreate';
import MolFormLenguageCreate from '../molecule/mol-languages/MolFormLanguagesCreate';


const Admin = () => {
  return (
   <div>
    <MolFormStacksCreate />
    <MolFormLenguageCreate />
   </div>
  )
}

export default Admin