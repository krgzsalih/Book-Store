import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BaseURLDB, BASE_URL } from "../constants/axios";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const Provider = ({ children }) => {

    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [token, setToken] = useState('');
    const [isAuth, setIsAuth] = useState(null);
    const [isAdmin, setIsAdmin] = useState(null);

    const setAuth = data => {

        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.jwt);

        setIsAuth(true);
        setUser(data.user);
        setToken(data.jwt);
        setIsAdmin(data.user.perm)
        axios.defaults.headers.common.Authorization = 'Bearer ' + data.jwt

    }



    console.log("====", user)
    console.log("===>>>>>>", token)


    const userControl = () => {

        const userInfo = localStorage.getItem('user');
        if (userInfo) {
            const tokenInfo = localStorage.getItem('token');
            const userInfoX = JSON.parse(userInfo);

            setUser(userInfoX);
            setToken(tokenInfo);
            setIsAdmin(userInfoX.perm);

            console.log("tokennn", user)
            axios.defaults.headers.common.Authorization = 'Bearer ' + tokenInfo

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

        localStorage.removeItem('user');
        localStorage.removeItem('token');
        navigate("/login")

        axios.defaults.headers.common.Authorization = 'Bearer ' + " "
    }

    useEffect(() => {
        isAdmin === true ? navigate("/admin") : navigate("/")
    }, [isAdmin]);

    useEffect(() => {
        userControl()
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            token,
            isAdmin,
            isAuth,
            setAuth,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default Provider;