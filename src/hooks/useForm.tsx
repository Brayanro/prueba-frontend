import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext, AppContextType } from "../context/AppContext";
import { loginUser } from "../services/loginService";
import { generateRandomToken, isEmailValid } from "../utils/functions";

const useForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isPasswordHidden, setPasswordHidden] = useState(true);

  const { setUser, setIsAuthenticated } = useContext(
    AppContext
  ) as AppContextType;

  const navigate = useNavigate();

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isEmailValid(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError("");
    }

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    } else {
      setPasswordError("");
    }
    try {
      const { data } = await loginUser(email, password);

      setUser({ email: data?.email || "" });
      setIsAuthenticated(true);
      navigate("/");
      const token = generateRandomToken();
      localStorage.setItem("token", token);
      localStorage.setItem("saveUser", data?.email ?? "");
    } catch (error) {
      console.error("Failed to login:", error);
    }
  };

  const hanldeTogglePasswordVisibility = () => {
    setPasswordHidden(!isPasswordHidden);
  };

  return {
    handleChangeEmail,
    handleChangePassword,
    emailError,
    passwordError,
    handleLogin,
    hanldeTogglePasswordVisibility,
    email,
    password,
    isPasswordHidden,
  };
};

export default useForm;
