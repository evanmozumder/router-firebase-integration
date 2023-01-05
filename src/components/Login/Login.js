import React, { useEffect } from "react";
import useFirebase from "../../hooks/useFirebase";
import "./Login.css";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import app from "../../firebase.init";
import { useState } from "react";
import { auth } from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

// const auth = getAuth(app);

const Login = () => {
  // const { handleGoogleSignIn, handleFacebookSignIn, handleGithubSignIn } =useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [user] = useAuthState(auth);
  console.log(user);

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [from, navigate, user]);

  return (
    <div>
      <h3>Please Login</h3>
      <form>
        <input
          onBlur={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Your Email"
        />
        <br />
        <input
          onBlur={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
        <br />
        <button
          onClick={(e) => {
            return (
              e.preventDefault(), signInWithEmailAndPassword(email, password)
            );
          }}
        >
          SignIn
        </button>
      </form>
      {/* <button onClick={handleGoogleSignIn}>Google SignIn</button>
      <button onClick={handleGithubSignIn}>Github SignIn</button>
      <button onClick={handleFacebookSignIn}>Facebook SignIn</button> */}
      <button onClick={handleGoogleSignIn}>Google SignIn</button>
      <button onClick={() => signInWithGithub()}>Github SignIn</button>
      <button onClick={() => signInWithFacebook()}>Facebook SignIn</button>
    </div>
  );
};

export default Login;
