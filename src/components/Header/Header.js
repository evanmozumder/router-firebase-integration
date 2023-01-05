import { getAuth } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import app from "../../firebase.init";
import useFirebase from "../../hooks/useFirebase";
import "./Header.css";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../hooks/useAuth";

// const auth = getAuth(app);

const Header = () => {
  // const { user, handleSignOut } = useFirebase();
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  return (
    <div className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/register">Register</Link>
        <span>{user?.displayName && user.displayName}</span>
        {user?.uid ? (
          <button onClick={signOut}>Sign Out</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
