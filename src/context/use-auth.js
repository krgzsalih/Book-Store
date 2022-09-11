import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BaseURLDB, BASE_URL } from "../constants/axios";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const Provider = (props) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [token, setToken] = useState('');
    const [isAuth, setIsAuth] = useState(null);
    const [isAdmin, setIsAdmin] = useState(null)

    const setAuth = data => {

        setUser(data.user);
        setToken(data.jwt);
        setIsAdmin(data.user.perm)

        console.log("====", isAdmin)
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.jwt);
        setIsAuth(true);

        axios.defaults.headers.common.Authorization = 'Bearer ' + data.jwt

        checkPerm(isAdmin)
    }

    const checkPerm = (perm) => {
        console.log("perm", perm)
        if( perm === true){
            navigate("/admin")
        }
        else if( perm === false){
            navigate("/")
        }
    }



    const userControl = () => {
        const userInfo = localStorage.getItem('user');

        if (userInfo) {
            const tokenInfo = localStorage.getItem('token');
            const userInfoX = JSON.parse(userInfo);

            setUser(userInfoX);
            setToken(tokenInfo);
            setIsAuth(true);

            axios.defaults.headers.common.Authorization = 'Bearer ' + tokenInfo

            
        }
        else {
            logout();
            setIsAuth(false);
        }
    }

    const logout = () => {
        setUser({});
        setToken('');
        setIsAuth(false);

        localStorage.removeItem('user');
        localStorage.removeItem('token');

        axios.defaults.headers.common.Authorization = 'Bearer ' + " "
    }

    useEffect(() => {
        userControl();
    }, []);

    return (
        <AuthContext.Provider value={{
            user, 
            token, 
            isAdmin,
            isAuth, 
            logout,
            setAuth,
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default Provider;