import Drawer from '../atome/drawer/Drawer';
import AtomSearch from '../atome/header/AtomSearch';
import AtomHour from '../atome/header/AtomHour';
import AtomLogin from '../atome/header/AtomLogin';

function Layout() {
  return (
    <>
    <div className="flex">
        <div className="">
          <Drawer />
        </div>
        <div className="w-full h-20 flex justify-between">
          <AtomSearch />
          <AtomHour />
          <AtomLogin />
        </div>
    </div>
    </>
  );
}


export default Layout;