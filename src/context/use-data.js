import { createContext, useContext, useState } from "react";
export const DataContext = createContext();
export const useData = () => useContext(DataContext);

const Provider = ({ children }) => {

    const [name, setName] = useState();
    const [ isLoggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const [mode, setMode] = useState("Light");
    const [adminSearch, setAdminSearch] = useState("");
    const [tokenInfo, setTokenInfo] = useState('');

    return (
        <DataContext.Provider
            value={{
                mode,
                name,
                user,
                isLoggedIn,
                adminSearch,
                tokenInfo,
                setTokenInfo,
                setLoggedIn,
                setName,
                setUser,
                setMode,
                setAdminSearch,
            }}
        >{children}
        </DataContext.Provider>
    )
}
export default Provider