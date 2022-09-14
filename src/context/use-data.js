import { createContext, useContext, useState } from "react";
export const DataContext = createContext();
export const useData = () => useContext(DataContext);

const Provider = ({ children }) => {

    
    const [ isLoggedIn, setLoggedIn] = useState(false);
    const [adminSearch, setAdminSearch] = useState("");
    const [bookInfo, setBookInfo] = useState()
    const [books, setBooks] = useState()
    const [info, setInfo] = useState(false)
    const [updateComp, setUpdateComp] = useState(false)
    const [updatedBookId, setUpdatedBookId] = useState()
    const [bookParameters, setbookParameters] = useState({}) 
    const [cart, setCart] = useState([])   

    return (
        <DataContext.Provider
            value={{
                info,
                cart,
                isLoggedIn,
                adminSearch,
                bookInfo,
                books,
                updateComp,
                updatedBookId,
                bookParameters,
                setbookParameters,
                setUpdatedBookId,
                setUpdateComp,
                setBooks,
                setInfo,
                setCart,
                setBookInfo,
                setLoggedIn,
                setAdminSearch,
            }}
        >{children}
        </DataContext.Provider>
    )
}
export default Provider