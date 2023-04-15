import React from 'react';
import MolFormCodersCreate from '../molecule/mol-coders/MolFormCodersCreate'
import MolFormSchoolsCreate from '../molecule/mol-school/MolFormSchoolsCreate';
import MolFormPromotionsCreate from '../molecule/mol-promotions/MolFormPromotionsCreate';

const Schools = () => {
  return (
    <div>
      <MolFormCodersCreate/>
      <MolFormSchoolsCreate/>
      <MolFormPromotionsCreate/>
      
    </div>
  )
}
export default Schools;