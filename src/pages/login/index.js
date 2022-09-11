import React, { useState } from 'react'
import Style from './style.module.scss'
import Admin from '../../assets/admin.png'
import Button from '../../components/button';
import Input from '../../components/input'
import { useData } from '../../context/use-data';
import { loginSchema } from '../../constants/yup';
import { loginService } from '../../services/auth';
import { Formik, useFormik } from 'formik';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/use-auth';
import Header from '../../components/header';


const Login = () => {

    const { mode, setLoggedIn, setTokenInfo, setName } = useData()
    const {setAuth, setIsAdmin, isAdmin} = useAuth()

    const formik = useFormik({
        initialValues: {
            identifier: '',
            password: ''
        },
        validationSchema: loginSchema,
        onSubmit: async values => {
            
            const response = await loginService(values)

            if (response.status === 200) {
                setAuth(response.data);
                toast.success("Login successful")
            }
            else if (response.status === 400) {
                toast.error("Bad Request")
            }
        },
    });


    return (
        <>
        <Header/>
        <div className={Style.container + " " + mode}>
            <form className={Style.content + " " + mode} >
                <img src={Admin} alt="admin-logo"></img>
                <h5>Book Store Login</h5>
                <Input
                    title="E-mail"
                    name="identifier"
                    className="login"
                    value={formik.values.identifier}
                    setValue={formik.handleChange("identifier")}
                    error={formik.errors.identifier}
                />
                <Input
                    title="Password"
                    name="password"
                    id="password"
                    className="login"
                    type="password"
                    value={formik.values.password}
                    setValue={formik.handleChange("password")}
                    error={formik.errors.password}
                />
                <Button
                    className="login"
                    type="submit"
                    click={formik.handleSubmit}
                    title="Login"
                />
            </form>
        </div>
        </>
    )
}
export default Login