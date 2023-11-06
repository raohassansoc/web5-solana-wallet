"use client"
import React, { createContext, useContext, useState , useEffect} from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [mnemonicWords, setMnemonic] = useState(null);
  const [mainAccount, setmainAccount] = useState(null);
  const [multiAccount , setMultiaccount] = useState([]);
  const setMain = (data) => {
    setmainAccount(data);
  };

  const addMultiAccount = (data) =>{
    setMultiaccount(multiAccount => [...multiAccount, data]);
  }

  const removeAccount = (index) => {
    const isConfirmed = window.confirm("Are you sure you want to remove this account?");
    if (isConfirmed) {
    const updatedObjects = [...multiAccount];
    updatedObjects.splice(index, 1);
    setMultiaccount(updatedObjects);
    setmainAccount(multiAccount[index-1])
    }
  };

  const mnemonic = (data) => {
    setMnemonic(data);
  };

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  useEffect(()=>{
   
  },[mainAccount , multiAccount])

  return (
    <AuthContext.Provider value={{ removeAccount, addMultiAccount, multiAccount, mainAccount, setMain, mnemonicWords, user, login, logout, mnemonic }}>
      {children}
    </AuthContext.Provider>
  );
};
