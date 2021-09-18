import React, { useEffect, useState } from "react";
import app from "../../base";
import './auth.css'
import Load from '../../asset/load.gif'

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => { 
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
      setPending(false)
    });
  }, []);


  if(pending){
    return <div class="loader">
      <img src={Load} alt="" />
    </div>

  }


  

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};