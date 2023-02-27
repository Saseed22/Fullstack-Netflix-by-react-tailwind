import { useState, useEffect, useContext, createContext } from "react";
import { auth } from "../fireBase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function SignUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function SignIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function LogOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscrib = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscrib();
    };
  });

  return (
    <AuthContext.Provider value={{ SignUp, SignIn, LogOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
