import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../constants/firebase";

export const useIsLoggedIn = () => {
  const [isLogin, setIsLogin] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsLogin(!!user);
    });
  }, []);

  return isLogin;
};