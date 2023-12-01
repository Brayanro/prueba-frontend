import { useContext } from "react";
import { AppContext, AppContextType } from "../context/AppContext";

export const LogoutButton = () => {
  const { setIsAuthenticated, setUser } = useContext(
    AppContext
  ) as AppContextType;

  const handleLogout = () => {
    setUser({ email: "" });
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    localStorage.removeItem("saveUser");
  };

  return (
    <button
      className="absolute text-base font-semibold bg-gray-700 rounded-lg w-[233px] h-[59px] mt-2"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};
