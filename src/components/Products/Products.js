import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";
import { auth } from "../../hooks/useAuth";
import useFirebase from "../../hooks/useFirebase";
import "./Products.css";

// const auth = getAuth(app);

const Products = () => {
  // const { user } = useFirebase();
  const [user] = useAuthState(auth);
  return (
    <div>
      <h3>{user ? user.displayName : "not signed in"}</h3>
    </div>
  );
};

export default Products;
