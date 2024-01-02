import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
    const navigate = useNavigate();
    const { Login } = useAuth();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const onSubmit = () => {
    try {
      const isLoginSuccessful = Login(data.email, data.password);
      if (isLoginSuccessful) {
         setData({
           email: "",
           password: "",
         });
        navigate("/");
      }
    } catch (error) {
      setData({
        email: "",
        password: "",
      });
      toast.error("Login failed:", error.message);
    }
  };
  return (
    <div className="w-full bg-[#F5F6F8] min-h-screen pt-24 ">
      <nav
        className="md:px-20 px-4  py-6 flex justify-between items-center fixed z-50 w-full top-0 bg-white backdrop-filter backdrop-blur-sm border-b border-gray-200 bg-opacity-30 shadow-custom-light"
        aria-label="navbar"
        id="navbar"
      >
        <div className="">
          <h1 className="text-primary font-extrabold text-4xl">TRYOUT</h1>
        </div>
        <div className="flex items-center gap-x-2" aria-label="header-text">
          <div className="flex items-center gap-x-2" aria-label="header-text">
            <p className="text-sm text-gray-500">New here ?</p>
            <button
              onClick={() => navigate("/signup")}
              aria-label="sign-in button"
              className="text-white bg-primary  font-bold md:text-sm text-xs px-4 py-2 border border-primary rounded-[4px] shadow-button-light"
            >
              Signup
            </button>
          </div>
          <button
            onClick={() => navigate("/")}
            aria-label="sign-in button"
            className="text-primary  font-bold md:text-sm text-xs px-4 py-2 border border-primary rounded-[4px] shadow-button-light"
          >
            Home
          </button>
        </div>
      </nav>
      <section
        className="w-full lg:px-20 md:px-10 px-6 pt-6 flex justify-center"
        aria-label="page-content "
      >
        <div className="!bg-white rounded-lg shadow-custom-light p-10 flex flex-col md:w-[522px] my-14">
          <div aria-label="form-header-texts" className="flex flex-col gap-1">
            <h1 className=" text-primary font-medium text-[24px]">
              Welcome Back!
            </h1>
            <p className="text-[#606060] text-xs">Sign in to your account</p>
            <hr className="mt-4 border-2 border-[#F5F6F8]" />
          </div>
          <div
            aria-label="signIn-form"
            className="mt-4 w-full flex flex-col gap-3"
          >
            <div className="w-full">
              <label htmlFor="email" className="text-sm">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={data.email}
                onChange={handleChange}
                className="block w-full py-4 bg-white rounded-md focus:outline-none p-3  sm:text-sm border-primary border"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <input
                id="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                type="password"
                className="block w-full py-4 bg-white rounded-md focus:outline-none p-3  sm:text-sm border-primary border"
                required
              />
            </div>
            <button
              onClick={onSubmit}
              className="bg-primary text-white p-4 rounded shadow-button-light
            text-sm w-full mt-4"
            >
              Sign in
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
