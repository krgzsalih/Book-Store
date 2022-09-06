import { createContext, useContext, useState } from "react";

export const DataContext = createContext();
export const useData = () => useContext(DataContext);

const Provider = ({children}) => {
    const [mode , setMode] = useState("Light")
    const [adminSearch, setAdminSearch] = useState()
    
    return (
        <DataContext.Provider
            value={{
                mode,
                adminSearch,
                setMode,
                setAdminSearch
            }}
        >{children}
        </DataContext.Provider>
    )
}
export default Provider