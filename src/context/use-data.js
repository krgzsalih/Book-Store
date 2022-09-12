import { createContext, useContext, useState } from "react";
export const DataContext = createContext();
export const useData = () => useContext(DataContext);

const Provider = ({ children }) => {

    
    const [ isLoggedIn, setLoggedIn] = useState(false);
    const [mode, setMode] = useState("Light");
    const [adminSearch, setAdminSearch] = useState("");
    const [bookInfo, setBookInfo] = useState()
    const [books, setBooks] = useState()
    const [info, setInfo] = useState(false)

    return (
        <DataContext.Provider
            value={{
                mode,
                info,
                isLoggedIn,
                adminSearch,
                bookInfo,
                books,
                setBooks,
                setInfo,
                setBookInfo,
                setLoggedIn,
                setMode,
                setAdminSearch,
            }}
        >{children}
        </DataContext.Provider>
    )
}
export default Provider