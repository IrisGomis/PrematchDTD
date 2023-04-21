import React from 'react';
import MolTableEventShowDelete from '../molecule/mol-event/MolTableEventShowDelete';
import MolExcelSheetJs from '../molecule/mol-excelUpDown/MolExcelSheetJs';
//import MolTableDoungLoad from '../molecule/mol-excelUpDown/MolTableDoungLoad';
// import MolExcellDowload3 from '../molecule/mol-excelUpDown/MolExcellDownload3';



const Home = () => {
  return (
    <>
    {/* <MolExcellDowload3 /> */}
    {/* <MolTableDoungLoad/> */}
     <MolExcelSheetJs/>
     <MolTableEventShowDelete/>
    </>
  )
}

export default Home