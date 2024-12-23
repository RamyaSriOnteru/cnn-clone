import React, { useState } from "react";
import logo from "../images/cnn.png";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../firebase/Setup";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      onAuthStateChanged(auth, async (user: any) => {
        await sendEmailVerification(user);
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-red-100 h-screen flex flex-col items-center justify-center ">
      <div className="bg-white flex flex-col items-center justify-center w-5/12 h-5/6 rounded-lg shadow-lg">
        <img src={logo} alt="" className="w-16 h-14" />
        <h1 className="text-2xl font-bold mt-3">
          Log into your CNN Clone account
        </h1>
        <h1 className="mt-2">
          Already Have an account?
          <span className="underline cursor-pointer"> Sign In</span>
        </h1>
        <input
          type="text"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          className=" mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-96 p-2.5 "
          placeholder="Enter Email"
          required
        />
        <input
          type="text"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          className=" mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-96 p-2.5 "
          placeholder="Enter Password"
          required
        />
        <h1 className="text-sm mt-3">
          By Clicking "Create account", a new account will be created in <br />
          CNN Clone Website{" "}
        </h1>
        <button
          onClick={signup}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-96 mt-4 h-12"
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Signup;
