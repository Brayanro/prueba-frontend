import useForm from "../hooks/useForm";
import { Label } from "./Label";

export const Form = () => {
  const {
    handleChangeEmail,
    handleChangePassword,
    email,
    emailError,
    password,
    passwordError,
    handleLogin,
    hanldeTogglePasswordVisibility,
    passwordHidden,
  } = useForm();

  return (
    <section className="mx-11 flex flex-col justify-center h-screen">
      <h1 className="text-5xl text-[#31A5E0] font-bold text-center mb-8">
        Movies App
      </h1>
      <h3 className="text-4xl font-bold text-white">Login</h3>
      <p className="text-base font-medium text-[#C7C7C7] mt-3 mb-6">
        Login with your data that your entered during your registration
      </p>
      <form className="flex flex-col gap-8" onSubmit={handleLogin}>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Label text="Enter your email address" />
            <input
              type="text"
              className="w-full h-16 rounded-lg bg-white p-4 text-base outline-none"
              placeholder="name@example.com"
              value={email}
              onChange={handleChangeEmail}
            />
            {emailError && <p className="text-red-500">{emailError}</p>}
          </div>
          <div className="flex flex-col gap-4">
            <Label text="Enter your password" />
            <div className="relative w-full">
              <div
                className="text-gray-400 absolute right-3 top-4 inset-y-0 my-auto active:text-gray-600 cursor-pointer"
                onClick={hanldeTogglePasswordVisibility}
              >
                {passwordHidden ? (
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#31A5E0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#31A5E0"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                )}
              </div>
              <input
                type={passwordHidden ? "password" : "text"}
                className="w-full h-16 rounded-lg bg-white p-4 text-base outline-none"
                placeholder="********"
                value={password}
                onChange={handleChangePassword}
              />
              {passwordError && <p className="text-red-500">{passwordError}</p>}
            </div>
          </div>
        </div>
        <button className="w-full h-14 bg-[#31A5E0] hover:bg-[#3c8bb3] text-white rounded-lg text-xl font-bold">
          Login
        </button>
      </form>
      <p className="text-center text-base font-bold text-[#C7C7C7] mt-20">
        Don’t have an account?{" "}
        <a href="#" className="text-[#31A5E0] hover:text-[#3c8bb3]">
          Register now
        </a>
      </p>
    </section>
  );
};
