import React, { useContext, useEffect } from "react";
import Layout from "../components/layout";
import AuthContext from "../contexts/auth/AuthContext";
import axios from "axios";

const Logout = () => {
  const authContext = useContext(AuthContext);

  const { logoutUser } = authContext;

  useEffect( () => {

    console.log("logging out user...");
    logoutUser();
    console.log("user logged out!");

    return () => {
    }

  }, []);

  return (
    <Layout>
      You have been logged out
    </Layout>
  );
}


export default Logout
