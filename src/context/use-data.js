import { createContext, useContext, useState } from "react";
export const DataContext = createContext();
export const useData = () => useContext(DataContext);

const Provider = ({ children }) => {

    
    const [ isLoggedIn, setLoggedIn] = useState(false);
    const [adminSearch, setAdminSearch] = useState("");
    const [bookInfo, setBookInfo] = useState()
    const [books, setBooks] = useState()
    const [info, setInfo] = useState(false)
    
    const [updatedBookId, setUpdatedBookId] = useState()
    const [bookParameters, setbookParameters] = useState({})    

    return (
        <DataContext.Provider
            value={{
                info,
                isLoggedIn,
                adminSearch,
                bookInfo,
                books,
                updatedBookId,
                bookParameters,
                setbookParameters,
                setUpdatedBookId,
                setBooks,
                setInfo,
                setBookInfo,
                setLoggedIn,
                setAdminSearch,
            }}
        >{children}
        </DataContext.Provider>
    )
}
export default Provider