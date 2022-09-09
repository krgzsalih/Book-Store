import React, { useState } from 'react'
import Style from './style.module.scss'
import Admin from '../../../assets/admin.png'
import Button from '../../../components/button';
import Input from '../../../components/input'
import { useData } from '../../../context/use-data';
import axios from 'axios';
import { toast } from 'react-toastify';


const LogAdmin = () => {

    const { mode, setLoggedIn, setName, settokenInfo} = useData()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    const KeyDown = (event) => {
        if (event.key === "Enter") {
            handleClick()
        }
    }
    
    const handleClick = async () => {
        try {
            const { data  } = await axios.post('http://localhost:1337/api/auth/local', {
                identifier: email,
                password: password
            });
            //console.log(data)
            setName(data.user.username)
            toast.success("Login successful")
            setLoggedIn(true)
            settokenInfo(data.jwt);
        } catch {
            toast.error("Invalid Email or Password ")
        }
    }

    return (
        <div className={Style.container + " " + mode}>
            <div className={Style.content + " " + mode} >
                <img src={Admin} alt="admin-logo"></img>
                <h5>Book Store Login</h5>
                <Input
                    title="E-mail"
                    type="email"
                    name="login"
                    onKeyDown={KeyDown}
                    setValue={setEmail}
                />
                <Input
                    title="Password"
                    type="password"
                    name="login"
                    setValue={setPassword}
                    onKeyDown={KeyDown}
                />
                <Button
                    click={handleClick}
                    title="Login"
                />
            </div>
        </div>
    )
}
export default LogAdmin