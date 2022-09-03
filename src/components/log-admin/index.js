import React, { useState } from 'react'
import Style from './style.module.scss'
import Input from '../../components/input'
import Button from '../../components/button';
import Switch from '../../components/switch';
import { useData } from '../../context/use-data';
import Logo from '../../assets/logo.png'

const LogAdmin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {mode} = useData()

    return (
        <div className={Style.container + " " + mode}>
            <div className={Style.content + " " + mode} >
                <img src={Logo} ></img>
                <h5>Book Store Admin</h5>
                <Input
                    value={email}
                    setValue={setEmail}
                    title="E-mail"
                    type="email"
                />
                <Input
                    value={password}
                    setValue={setPassword}
                    title="Password"
                    type="password"
                />
                <Button
                    title="Login"
                />
            </div>
            <Switch/>
        </div>
    )
}

export default LogAdmin