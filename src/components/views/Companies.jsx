import React from 'react';
import MolFormCompaniesCreate from '../molecule/mol-companies/MolFormCompaniesCreate';
import MolFormRecruitersCreate from '../molecule/mol-recuiter/MolFormRecruitersCreate';


const Companies = () => {
  return (
    <div>
      <MolFormCompaniesCreate />
      <MolFormRecruitersCreate />
    </div>
  )
}

export default Companies