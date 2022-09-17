import axios from "axios";
import { BaseURLDB, clientURL } from "../constants/axios";

const loginService = async (data) => {
  try {
    const response = await axios.post(BaseURLDB + clientURL.login, data);
    return response;
  } catch (error) {
    return error.response;
  }
};
// repository pattern
const registerService = async (data) => {
  try {
    const response = await axios.post(BaseURLDB + clientURL.register, data);
    return response;
  } catch (error) {
    return error.response;
  }
};

export { loginService, registerService };
