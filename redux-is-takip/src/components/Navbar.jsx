import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../firebase/Config";
import { logout as logoutHandle } from "../slices/authSlice";
import { auth } from "../firebase/Config";
import { useEffect } from "react";
const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    if (user) {
      await logout();
      dispatch(logoutHandle());
    }
  };
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  return (
    <nav className="p-2 w-full mb-3">
      <div className="flex justify-between items-center bg-gradient-to-r from-blue-500 to-indigo-500 shadow-md shadow-gray-300 rounded-xl p-4 xl:flex-row xs:flex-col">
        <div className="text-blue-50 font-extrabold text-xl px-2">
          Redux İş Takip Projesi
        </div>
        <div className="flex gap-3">
          {auth.currentUser ? (
            <div className="flex items-center gap-2 xs:flex-col">
              <span className="text-gray-100 italic font-light">
                {auth.currentUser.email}
              </span>
              <button
                className="text-blue-700 bg-blue-200 px-3 py-1 rounded-xl hover:text-red-200 hover:bg-red-600 ease-in-out duration-500"
                onClick={handleLogout}
              >
                Çıkış
              </button>
            </div>
          ) : (
            <>
              <button
                className="rounded px-3 ease-in-out duration-500 text-blue-50 hover:bg-blue-50 hover:text-blue-700  "
                onClick={() => navigate("/login")}
              >
                Giriş
              </button>
              <button
                className="text-blue-50 px-3 p-1 rounded hover:bg-blue-50 hover:text-blue-700 duration-500 "
                onClick={() => navigate("/register")}
              >
                Kayıt Ol
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
