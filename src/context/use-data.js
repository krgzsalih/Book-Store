import { createContext, useContext, useState } from "react";
export const DataContext = createContext();
export const useData = () => useContext(DataContext);

const Provider = ({ children }) => {

    const [name, setName] = useState();
    const [ isLoggedIn, setLoggedIn] = useState(false);
    const [isAuth, setIsAuth] = useState(null);
    const [user, setUser] = useState({});
    const [mode, setMode] = useState("Light");
    const [adminSearch, setAdminSearch] = useState("");
    const [token, setToken] = useState('');
    const [tokenInfo, setTokenInfo] = useState('');

    return (
        <DataContext.Provider
            value={{
                mode,
                name,
                isLoggedIn,
                adminSearch,
                tokenInfo,
                setTokenInfo,
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