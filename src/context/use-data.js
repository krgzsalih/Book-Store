import { collection, onSnapshot } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../constants/firebase";

export const DataContext = createContext();
export const useData = () => useContext(DataContext);

const Provider = ({ children }) => {
    const [mode, setMode] = useState("Light")
    const [adminSearch, setAdminSearch] = useState("")
    const [books, setBooks] = useState([])

    
    useEffect(()=>{
        onSnapshot(collection(db, 'books'), (doc) => {
            setBooks(
                doc.docs.reduce((books, book) =>[...books, {...book.data(), id: book.id}], [])
            )
        })
    }, [])

    useEffect(()=>{
        console.log(books.includes("MFhTp_wtPDMC"))
    },[books])

    return (
        <DataContext.Provider
            value={{
                mode,
                adminSearch,
                setMode,
                setAdminSearch,
                books
            }}
        >{children}
        </DataContext.Provider>
    )
}
export default Provider