import Head from "next/head";
import React, { useState } from "react";
import AppContext from "../context/AppContext";
 


function MyApp({ Component, pageProps }) {
  const [userName, setUserName] = useState("user1");
  const [user, setUser] = useState('');
  return (
    <AppContext.Provider
      value={{
        user,
        userName,
        setUser,
      }}
    >
      
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
