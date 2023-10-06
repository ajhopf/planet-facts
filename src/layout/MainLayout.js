import {Outlet} from "react-router-dom";
import Navbar from "../components/MainNav/MainNav";

const MainLayout = () => {
  return <>
    <Navbar/>
    <main>
      <Outlet/>
    </main>
  </>
};

export default MainLayout;