import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext, AppContextType } from "../context/AppContext";
import { loginUser } from "../services/loginService";
import { generateRandomToken, isEmailValid } from "../utils/functions";

interface UseFormResult {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  emailError: string;
  setEmailError: React.Dispatch<React.SetStateAction<string>>;
  passwordError: string;
  setPasswordError: React.Dispatch<React.SetStateAction<string>>;
  passwordHidden: boolean;
  setPasswordHidden: React.Dispatch<React.SetStateAction<boolean>>;
  handleLogin: (e: ChangeEvent<HTMLFormElement>) => Promise<void>;
  handleChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  hanldeTogglePasswordVisibility: () => void;
}

const useForm = (): UseFormResult => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordHidden, setPasswordHidden] = useState(true);

  const { setUser } = useContext(AppContext) as AppContextType;

  const navigate = useNavigate();

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const handleLogin = async (
    e: ChangeEvent<HTMLFormElement>
  ): Promise<void> => {
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
      navigate("/");
      const token = generateRandomToken();
      localStorage.setItem("token", token);
      localStorage.setItem("saveUser", data?.email ?? "");
    } catch (error) {
      console.error("Failed to login:", error);
    }
  };

  const hanldeTogglePasswordVisibility = (): void => {
    setPasswordHidden(!passwordHidden);
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
    passwordHidden,
    setEmail,
    setEmailError,
    setPassword,
    setPasswordError,
    setPasswordHidden,
  };
};

export default useForm;
