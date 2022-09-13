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

// todo http://localhost:1337/api/books?filters[title][$containsi]=Lord
const SearchService = async (word) => {
    try{
        const response  = await axios.get(`${BaseURLDB}${clientURL.books}?filters[title][$containsi]=${word}`);
        return response
    }catch{
        console.log("error");
    }
}

export {
    DataService,
    SearchService
}