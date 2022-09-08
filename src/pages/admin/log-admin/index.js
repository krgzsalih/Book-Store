import React, { useRef } from 'react'
import Style from './style.module.scss'
import Admin from '../../../assets/admin.png'
import { useUserAuth } from '../../../context/use-user-auth';
import Button from '../../../components/button';
import Input from '../../../components/input'
import { useData } from '../../../context/use-data';


const LogAdmin = () => {

    const { mode } = useData()
    const { signIn } = useUserAuth()
    let emailRef = useRef()
    let passwordRef = useRef()

    const KeyDown = (event) => {
        if (event.key === "Enter") {
            handleClick()
        }
    }
    const handleClick = () => {
        signIn(emailRef.current.value, passwordRef.current.value)
    }
    return (
        <div className={Style.container + " " + mode}>
            <div className={Style.content + " " + mode} >
                <img src={Admin} alt="admin-logo"></img>
                <h5>Book Store Admin</h5>
                <Input
                    useRef={emailRef}
                    title="E-mail"
                    type="email"
                    name="login"
                    onKeyDown={KeyDown}
                />
                <Input
                    useRef={passwordRef}
                    title="Password"
                    type="password"
                    name="login"
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