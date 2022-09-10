import { createContext, useContext, useState } from "react";
export const DataContext = createContext();
export const useData = () => useContext(DataContext);

const Provider = ({ children }) => {

    const [name, setName] = useState();
    const [ isLoggedIn, setLoggedIn] = useState(false);
    const [mode, setMode] = useState("Light");
    const [adminSearch, setAdminSearch] = useState("");
    const [tokenInfo, settokenInfo] = useState("")

    return (
        <DataContext.Provider
            value={{
                mode,
                name,
                isLoggedIn,
                adminSearch,
                tokenInfo,
                settokenInfo,
                setLoggedIn,
                setName,
                setMode,
                setAdminSearch,
            }}
        >{children}
        </DataContext.Provider>
    )
}
export default Provider