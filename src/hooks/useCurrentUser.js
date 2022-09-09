import axios from "axios";
import { useEffect, useState } from "react";

export const useIsLoggedIn = () => {
  const [isLogin, setIsLogin] = useState();



  return isLogin;
};