import { getAuth } from "firebase/auth";
import React from "react";
import { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import app from "../../firebase.init";
import { auth } from "../../hooks/useAuth";
import useFirebase from "../../hooks/useFirebase";

// const auth = getAuth(app);

const Register = () => {
  // const { handleGoogleSignIn, handleFacebookSignIn, handleGithubSignIn } =useFirebase();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
  console.log(user);
  return (
    <div>
      <h3>Please Register</h3>
      <form>
        <input
          onBlur={(e) => setName(e.target.value)}
          type="text"
          placeholder="your name"
        />
        <br />
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
              e.preventDefault(),
              createUserWithEmailAndPassword(email, password)
            );
          }}
        >
          Register
        </button>
      </form>
      {/* <button onClick={handleGoogleSignIn}>Google SignIn</button> */}
      <button onClick={signInWithGoogle}>Google SignIn</button>
      {/* <button onClick={handleGithubSignIn}>Github SignIn</button> */}
      <button onClick={signInWithGithub}>Github SignIn</button>
      {/* <button onClick={handleFacebookSignIn}>Facebook SignIn</button> */}
      <button onClick={signInWithFacebook}>Facebook SignIn</button>
    </div>
  );
};

export default Register;
