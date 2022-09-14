
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const Provider = ({ children }) => {

    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [name, setName] = useState()
    const [token, setToken] = useState('');
    const [isAuth, setIsAuth] = useState(null);
    const [isAdmin, setIsAdmin] = useState(null);
    const [mode, setMode] = useState("Light");

    const setAuth = data => {

        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.jwt);

        setIsAuth(true);
        setUser(data.user);
        setName(data.user.username)
        setToken(data.jwt);
        setIsAdmin(data.user.perm)

    }

    const userControl = () => {

        const userInfo = localStorage.getItem('user');
        

        if (userInfo) {
            const tokenInfo = localStorage.getItem('token');
            const userInfoX = JSON.parse(userInfo);
            
            setName(userInfoX.username)
            setUser(userInfoX);
            setToken(tokenInfo);
            setIsAdmin(userInfoX.perm);
            
        }
        else {
            logout();
            setIsAdmin(null);
        }

    }

    const logout = () => {
        setUser({});
        setToken('');
        setIsAdmin(null);
        setName('')

        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }

    useEffect(() => {
        isAdmin === true && navigate("/admin")
        isAdmin === false && navigate("/")
    }, [isAdmin]);
    useEffect(() => {
        userControl()
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            name,
            token,
            isAdmin,
            isAuth,
            mode,
            setAuth,
            logout,
            setMode,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default Provider;