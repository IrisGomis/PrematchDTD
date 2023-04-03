import Drawer from '../atome/drawer/Drawer';
import AtomSearch from '../atome/header/AtomSearch';
import AtomHour from '../atome/header/AtomHour';
import AtomLogin from '../atome/header/AtomLogin'

function Home() {
  return (
    <>
      <div className="w-15">
        <Drawer />
      </div>
      <div className="flex-grow flex justify-center items-center">
        <AtomSearch />
      </div>
      <div className="w-1/4 flex justify-between items-center">
        <AtomHour />
        <AtomLogin />
      </div>
    </>
  );
}


export default Home;

// import React from 'react';
// import Drawer from '../atome/drawer/Drawer';
// import AtomSearch from '../atome/header/AtomSearch';
// import AtomHour from '../atome/header/AtomHour';
// import AtomLogin from '../atome/header/AtomLogin';

// function Home() {
//   return (
//     <div className="flex h-screen">
//       {/* Drawer anclado a la izquierda */}
//       <Drawer className="flex-none" />

//       {/* Contenedor de la barra de navegación */}
//       <div className="flex-grow flex flex-col">
//         {/* AtomSearch centrado */}
//         <div className="flex justify-center items-center bg-white p-4 shadow-lg">
//           <AtomSearch />
//         </div>

//         {/* AtomHour alineado a la izquierda */}
//         <div className="flex justify-start items-center bg-white p-4 shadow-lg">
//           <AtomHour />
//         </div>

//         {/* AtomLogin alineado a la derecha */}
//         <div className="flex justify-end items-center bg-white p-4 shadow-lg">
//           <AtomLogin />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
