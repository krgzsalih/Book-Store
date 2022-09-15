import { createContext, useContext, useState } from "react";
export const DataContext = createContext();
export const useData = () => useContext(DataContext);

const Provider = ({ children }) => {

    const [slideElement, setSlideElement] = useState()
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
    const [totalPrice, setTotalPrice] = useState([0]);   

    return (
        <DataContext.Provider
            value={{
                info,
                cart,
                books,
                bookInfo,
                isLoggedIn,
                updateComp,
                totalPrice,
                adminSearch,
                slideElement,
                updatedBookId,
                bookParameters,
                mainPageBookInfo,
                mainPageBookInfoDetails,
                setmainPageBookInfoDetails,
                setmainPageBookInfo,
                setbookParameters,
                setUpdatedBookId,
                setSlideElement,
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