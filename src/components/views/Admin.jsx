import React from 'react';
import MolTableRegionsShowDelete from '../molecule/mol-regions/MolTableRegionsShowDelete';
import FormUploa from '../molecule/mol-companies/FormUpload';
import MolFormRecruitersEditcopy from '../molecule/mol-recuiter/MolFormRecruitersEditcopy';



const Admin = () => {
  return (
   <div>
    <FormUploa/>
    <MolFormRecruitersEditcopy/>
    <MolTableRegionsShowDelete/>
   </div>
  )
}

export default Admin;