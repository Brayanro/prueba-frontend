import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext, AppContextType } from "../context/AppContext";

export const LogoutButton = () => {
  const { setUser } = useContext(AppContext) as AppContextType;

  const navigate = useNavigate();

  const handleLogout = () => {
    setUser({ email: "" });
    localStorage.removeItem("token");
    localStorage.removeItem("saveUser");
    navigate("/login");
  };

  return (
    <button
      className="absolute text-base font-semibold bg-gray-700 hover:bg-gray-900 rounded-lg w-[233px] h-[59px] mt-2"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};
