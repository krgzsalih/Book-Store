import { createContext, useContext, useState } from "react";
export const DataContext = createContext();
export const useData = () => useContext(DataContext);

const Provider = ({ children }) => {

    
    const [ isLoggedIn, setLoggedIn] = useState(false);
    const [adminSearch, setAdminSearch] = useState("");
    const [bookInfo, setBookInfo] = useState()
    const [books, setBooks] = useState()
    const [info, setInfo] = useState(false)
    const [mainPageBookInfo, setmainPageBookInfo] = useState(false)
    const [updateComp, setUpdateComp] = useState(false)
    const [updatedBookId, setUpdatedBookId] = useState()
    const [bookParameters, setbookParameters] = useState({}) 
    const [cart, setCart] = useState([])
    const [mainPageBookInfoDetails, setmainPageBookInfoDetails] = useState();
    const [totalPrice, setTotalPrice] = useState([]);   

    return (
        <DataContext.Provider
            value={{
                totalPrice,
                info,
                cart,
                isLoggedIn,
                adminSearch,
                bookInfo,
                books,
                updateComp,
                updatedBookId,
                bookParameters,
                mainPageBookInfo,
                mainPageBookInfoDetails,
                setmainPageBookInfoDetails,
                setmainPageBookInfo,
                setbookParameters,
                setUpdatedBookId,
                setUpdateComp,
                setBooks,
                setInfo,
                setCart,
                setBookInfo,
                setLoggedIn,
                setAdminSearch,
                setTotalPrice,
            }}
        >{children}
        </DataContext.Provider>
    )
}
export default Provider