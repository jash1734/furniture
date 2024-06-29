import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FiUser } from "react-icons/fi";
import { IoLockClosedOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import OTPForm from "../UI/OTPForm";
import { toast, ToastContainer } from "react-toastify";

const LoginPage = ({ onClose }) => {

  const [loginForm, isLoginForm] = useState(true);
  const [signupForm, issignupForm] = useState(true);
  const [passwordForm, isPasswordForm] = useState(false);
  const [formTitle,setFormTitle]=useState("Get Started")
  const [showOTPForm, setShowOTPForm] = useState(false);

  const navigate = useNavigate();
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormLogin = async (e) => {
    e.preventDefault();
    setGmail(e.target.username.value);
    if(passwordForm){
      setPassword(e.target.password.value);

    }
    const result = await axios.post("http://localhost:4000/api/v1/user/", {
      gmail,
      password,
    });

    console.log(result.data);
    if (result.data === "login") {
      localStorage.setItem("username", gmail);
      window.location.href = "/";
    } 
    else if(result.data==="Password is Invaild"){
      toast.error(result.data);
    }
    else {
      isLoginForm(false);
      setShowOTPForm(true);
    }
  };

  const handleSignup = () => {
    issignupForm(false);
    console.log("enter");
    setFormTitle("Create Your Account");
  };

  return (
    <div className="login-wrapper z-20 fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex justify-center items-center">
      <ToastContainer />
      {loginForm && (
        <form
          onSubmit={handleFormLogin}
          className="login-form bg-white w-fit h-fit p-16 rounded-lg flex flex-col gap-4"
        >
          <div className="flex justify-between items-center w-full relative">
            <h2 className="text-2xl font-semibold headerTitle">{formTitle}</h2>
            <RxCross2 onClick={onClose} className="cursor-pointer" />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="flex w-80 px-3 py-3 h-fit items-center border rounded-xl ">
              <FiUser />
              <input
                className="w-full h-fit focus:outline-0 pl-3 text-base"
                placeholder="Enter your Email"
                type="email"
                name="username"
                value={gmail}
                onChange={(e) => setGmail(e.target.value)}
                required
              />
            </div>
            {signupForm && (
              <div className="flex w-80 px-3 py-3 h-fit items-center border rounded-xl ">
                <IoLockClosedOutline />
                <input
                  className="w-full h-fit focus:outline-0 pl-3 text-base"
                  placeholder="Enter your Password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            )}
            {signupForm && (
              <>
                <NavLink onClick={handleSignup} className="text-start w-full">
                  Create Your Account
                </NavLink>
              </>
            )}
            <button
              type="submit"
              className="w-80 bg-red-500 text-white py-3 my-5 rounded-lg"
            >
              Continue
            </button>
          </div>
        </form>
      )}
      {showOTPForm && <OTPForm gmail={gmail}/>}
    </div>
  );
};

export default LoginPage;
