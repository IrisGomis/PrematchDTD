import React from 'react'
import XLSX from 'xlsx';

const MolExcelSheetJs = (tableData, fileName) => {
  const worksheet = XLSX.utils.json_to_sheet(tableData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  XLSX.writeFile(workbook, `${fileName}.xlsx`);

  return (
    <>
    
    </>
  )
}

export default MolExcelSheetJs