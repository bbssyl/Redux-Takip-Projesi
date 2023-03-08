import { MdLocalGroceryStore } from "react-icons/md";
import { FaUsers, FaHome, FaTasks } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const MenuBar = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-500 text-blue-100 rounded-2xl shadow-md shadow-gray-500 xs:py-2">
      <div className="flex xl:flex-col md:flex-row xs:flex-col gap-2">
        <button
          type="button"
          className="flex items-center gap-2 hover:bg-blue-50 hover:text-blue-700 ease-in-out duration-500 p-2 rounded-lg"
          onClick={() => navigate("/dashboard")}
        >
          <FaHome size={24} />
          Dashboard
        </button>
        <button
          type="button"
          className="flex items-center gap-2 hover:bg-blue-50 hover:text-blue-700 ease-in-out duration-500 p-2 rounded-lg"
          onClick={() => navigate("/dashboard/employees")}
        >
          <FaUsers size={24} />
          Personel
        </button>
        <button
          type="button"
          className="flex items-center gap-2 hover:bg-blue-50 hover:text-blue-700 ease-in-out duration-500 p-2 rounded-lg"
          onClick={() => navigate("/dashboard/products")}
        >
          <MdLocalGroceryStore size={24} />
          Ürünler
        </button>
        <button
          type="button"
          className="flex items-center gap-2 hover:bg-blue-50 hover:text-blue-700 ease-in-out duration-500 p-2 rounded-lg"
          onClick={() => navigate("/dashboard/tasks")}
        >
          <FaTasks size={24} />
          Görevler
        </button>
      </div>
    </div>
  );
};

export default MenuBar;
