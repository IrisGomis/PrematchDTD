// import { IconButton, Tooltip, Button } from '@mui/material';
// import AttachFileIcon from '@mui/icons-material/AttachFile';
// import React, { useState } from 'react'; 
// import axios from 'axios';
// import { Download } from '@mui/icons-material';


// const initialvalues = {
//     archivo: null,
//     archivonombre: '',
//     archivourl: ''
// }

// const Uploadtutorial = () => {
    
//     const [archivo, setArchivo] = useState(initialvalues);

//     const fileDelectHandler = (e) => {

//         setArchivo({
//         archivo: e.target.files[0],
//         archivonombre: e.target.files[0].name,
//        })
//     }
    
//     const onSubmit = (e) =>{
//         e.prevent.default();
//         const formData = new FormData();
//         formData.append('file', archivo.archivo, archivo.archivonombre);
//         axios.post('http://127.0.0.1:8000/api/upload', formData,{
//             onUploadProgress: ProgressEvent => {
//                 console.log('Upload progress: ' + Math.round(ProgressEvent.loaded / ProgressEvent * 100) + '%');
//             }
//         })
//     }
    
//     const downLoad = ()=>{
//         axios({
//             url: 'http://127.0.0.1:8000/api/download',
//             method: 'GET',
//             responseType: 'blob',
//         }).then((response) => {
//             const url = window.URL.createObjectURL(new Blob([response.data]));
//             const link = document.createElement('a');
//             link.href = url;
//             // const arr = props.archivonombre.split('.');
//             link.setAttribute('download', 'archivo.pdf');
//             document.body.appendChild(link);
//             link.click();
//         });
//     };

//   return (
//     <>
//     <label htmlFor='archivo-input'>
//         <Tooltip title='Adjuntar archivo'>
//             <IconButton color='warning' component='span'>
//                <AttachFileIcon fontSize='large'/>
//             </IconButton>
//         </Tooltip>
//     </label>
//     <input type="file" id='archivo-input' onChange={fileDelectHandler} />
//     <Button text='Aceptar' variant='contained' onClick={onSubmit}>
//      Aceptar
//     </Button>
//     <IconButton color='warning'>
//         <Download fontSize='large' onClick={downLoad}/>
//     </IconButton>
//     </>
//   )
// }

// export default Uploadtutorial;