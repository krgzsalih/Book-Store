import axios from "axios";
import { BaseURLDB, clientURL } from "../constants/axios";
// ? Login Service
const loginService = async (data) => {
  try {
    const response = await axios.post(BaseURLDB + clientURL.login, data);
    return response;
  } catch (error) {
    return error.response;
  }
};
//  * Register Service
const registerService = async (data) => {
  try {
    const response = await axios.post(BaseURLDB + clientURL.register, data);
    return response;
  } catch (error) {
    return error.response;
  }
};

export { loginService, registerService };
