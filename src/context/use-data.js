import { createContext, useContext, useState } from "react";
export const DataContext = createContext();
export const useData = () => useContext(DataContext);

const Provider = ({ children }) => {

    
    const [ isLoggedIn, setLoggedIn] = useState(false);
    const [mode, setMode] = useState("Light");
    const [adminSearch, setAdminSearch] = useState("");

    return (
        <DataContext.Provider
            value={{
                mode,
                isLoggedIn,
                adminSearch,
                setLoggedIn,
                setMode,
                setAdminSearch,
            }}
        >{children}
        </DataContext.Provider>
    )
}
export default Provider