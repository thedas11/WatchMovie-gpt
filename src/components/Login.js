import React, { useState, useRef } from "react";
import Header from "./Header";
import validate from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState("true");

  const [credMessage, setCredMessage] = useState(null);
  const name = useRef(null)

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIn = () => setIsSignIn(!isSignIn);

  const toggleSign = () => {

    const message = validate(email.current.value, password.current.value);

    setCredMessage(message);

    if (message) return; // this is if any error comes just don't move further else move to the signup and signin

    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
                       
          }).catch((error) => {
            // An error occurred
            // ...
          });
          
          
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setCredMessage(errorCode + " " +errorMessage)
        });
    }

    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setCredMessage(errorCode + " " +errorMessage)
      });
    }
  };
  return (
    <div>
      <Header />

      <div className="absolute ">
        <img
          className="w-[100vw]"
          src={BG_URL}
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0  bg-opacity-80 rounded-lg "
      >
        <h1 className="text-white text-xl px-1">
          {isSignIn ? "SignIn" : "SignUp"}
        </h1>

        {!isSignIn && (
          <input
          ref={name}
            type="text"
            placeholder="Name"
            className="p-2 m-2 w-full bg-slate-700"
          />
        )}

        <input
          type="text"
          placeholder="email"
          className="p-2 m-2 w-full  bg-slate-700"
          ref={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full  bg-slate-700"
          ref={password}
        />
        <p className="text-red-400">{credMessage}</p>
        <button
          onClick={toggleSign}
          className="bg-red-500 h-11 w-full mx-2 border rounded-sm"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-white p-2 m-2 cursor-pointer" onClick={toggleSignIn}>
          {isSignIn
            ? "New user? Click to sign Up"
            : "registered user?click to sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
