import MenuBar from "../components/MenuBar";
import { Outlet } from "react-router-dom";

const HomeView = () => {
  return (
    <div>
      <div className="flex xl:flex-row lg:flex-col md:flex-col sm:flex-col xs:flex-col">
        <div className=" xl:h-screen xl:w-2/12 px-4">
          <MenuBar />
        </div>
        <div className="pt-4 h-full xl:w-10/12">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomeView;
