import axios from "axios";


// GOOGLE API ========>
export const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q="
export const API_KEY = "&key=AIzaSyAEc8QDLPW_uoPsTDBfQWW11TGEsJj4G8Q"

// LOCAL API ========>
export const BaseURL_DB = 'http://localhost:1337/api/';
export const client = axios.create({ BaseURL_DB });
export const clientURL = {
    login: 'auth/local',
    register: 'auth/local/register',
    books: 'books',
}