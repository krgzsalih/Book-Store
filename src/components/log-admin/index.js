import React, { useState } from 'react'
import Style from './style.module.scss'
import Input from '../../components/input'
import Button from '../../components/button';
import { useData } from '../../context/use-data';
import Admin from '../../assets/admin.png'

const LogAdmin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {mode} = useData()

    return (
        <div className={Style.container + " " + mode}>
            <div className={Style.content + " " + mode} >
                <img src={Admin} ></img>
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
        </div>
    )
}

export default LogAdmin