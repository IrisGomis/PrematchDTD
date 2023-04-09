import React from 'react';
import MolFormCodersCreate from '../molecule/mol-coders/MolFormCodersCreate';
import MolFormCodersEdit from '../molecule/mol-coders/MolFormCodersEdit';
import MolTableCodersShowDelete from '../molecule/mol-coders/MolTableCodersShowDelete';

const Admin = () => {
  return (
    <div>
      <MolFormCodersCreate/>
      <MolFormCodersEdit/>
      <MolTableCodersShowDelete/>
    </div>
  )
}

export default Admin