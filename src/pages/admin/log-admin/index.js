import React, { useState } from 'react'
import Style from './style.module.scss'
import Admin from '../../../assets/admin.png'
import Button from '../../../components/button';
import Input from '../../../components/input'
import { useData } from '../../../context/use-data';
import { loginSchema } from '../../../constants/yup';
import { loginService } from '../../../services/auth';
import { Formik, useFormik } from 'formik';
import axios from 'axios';
import { toast } from 'react-toastify';
import AuthLayout from '../../../layouts/authLayout';


const LogAdmin = () => {

    const { mode, setLoggedIn, setTokenInfo, setName } = useData()


    // const handleClick = async () => {
    //     try {
    //         const { data  } = await axios.post('http://localhost:1337/api/auth/local', {
    //             identifier: email,
    //             password: password
    //         });
    //         //console.log(data)
    //         setName(data.user.username)
    //         toast.success("Login successful")
    //         setLoggedIn(true)
    //         settokenInfo(data.jwt);
    //     } catch {
    //         toast.error("Invalid Email or Password ")
    //     }
    // }



    const formik = useFormik({
        initialValues: {
            identifier: '',
            password: ''
        },
        validationSchema: loginSchema,
        onSubmit: async values => {
            const response = await loginService(values)

            if (response.status === 200 && response.data.user.confirmed === true) {
                setTokenInfo(response.data.jwt);
                setLoggedIn(true)
                setName(response.data.user.username)
                toast.success("Login successful")
                console.log(response)
            }
            else if (response.status === 200 && response.data.user.confirmed === false) {
                toast.error("Forbidden Entry for Users")
            }
            else if (response.status === 400) {
                console.log("Bad Request")
                toast.error("forbidden entry")
            }
        },
    });


    return (
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
    )
}
export default LogAdmin