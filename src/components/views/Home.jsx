import React from 'react';
import MolTableEventShowDelete from '../molecule/mol-event/MolTableEventShowDelete';
//import MolExcelSheetJs from '../molecule/mol-excelUpDown/MolExcelSheetJs';
//import MolTableDoungLoad from '../molecule/mol-excelUpDown/MolTableDoungLoad';
import MolFormProvincesCreatePrueba from '../molecule/experimentos/MolFormProvincesCreatePrueba'

const Home = () => {
  return (
    <>
    {/* <MolTableDoungLoad/>
     <MolExcelSheetJs/> */}
     <MolFormProvincesCreatePrueba/>
     <MolTableEventShowDelete/>
    </>
  )
}

export default Home