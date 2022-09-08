import { createContext, useContext, useState } from "react";

export const DataContext = createContext();
export const useData = () => useContext(DataContext);

const Provider = ({children}) => {
    const [fireDB , setFireDB] = useState([])
    const [mode , setMode] = useState("Light")
    const [adminSearch, setAdminSearch] = useState("")

    return (
        <DataContext.Provider
            value={{
                mode,
                adminSearch,
                fireDB,
                setMode,
                setFireDB,
                setAdminSearch
            }}
        >{children}
        </DataContext.Provider>
    )
}
export default Provider