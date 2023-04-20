import React from 'react';
import MolTableEventShowDelete from '../molecule/mol-event/MolTableEventShowDelete';
// import MolExcelSheetJs from '../molecule/mol-excelUpDown/MolExcelSheetJs';
import MolTableDoungLoad from '../molecule/mol-excelUpDown/MolTableDoungLoad';



const Home = () => {
  return (
    <>
    <MolTableDoungLoad/>
     {/* <MolExcelSheetJs/> */}
     <MolTableEventShowDelete/>
    </>
  )
}

export default Home