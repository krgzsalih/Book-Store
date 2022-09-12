import axios from "axios";
import { BaseURLDB, clientURL } from "../constants/axios";


const DataService = async () => {
    try{
        const response  = await axios.get(`${BaseURLDB}${clientURL.books}`);
        return response
    }catch{
        console.log("error");
    }
}
export {
    DataService
}