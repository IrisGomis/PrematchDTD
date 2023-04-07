import Drawer from "../atome/drawer/Drawer";
import AtomSearch from "../atome/header/AtomSearch";
import AtomHour from "../atome/header/AtomHour";
import AtomLogin from "../atome/header/AtomLogin";

function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <div>
          <Drawer />
        </div>
        <div>
          <div className="w-full h-20 flex justify-between">
            <AtomSearch />
            <AtomHour />
            <AtomLogin />
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}

export default Layout;
