import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2 align="center">Login</h2>
      <form className="form" onSubmit={signIn}>
        <div className="form-control">
          <label htmlFor="email">Mail : </label>
          <input
            type="email"
            id="email_id"
            name="email_id"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div align="center">
          <button align="center" type="submit" className="btn">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
