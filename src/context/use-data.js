import { collection, onSnapshot } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../constants/firebase";

export const DataContext = createContext();
export const useData = () => useContext(DataContext);

const Provider = ({ children }) => {
    const [fireDB , setFireDB] = useState([])
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

    return (
        <DataContext.Provider
            value={{
                mode,
                adminSearch,
                fireDB,
                setMode,
                setFireDB,
                setAdminSearch,
                books
            }}
        >{children}
        </DataContext.Provider>
    )
}
export default Provider