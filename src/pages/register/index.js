import React from 'react'
import Style from './style.module.scss'
import Admin from '../../assets/admin.png'
import Button from '../../components/button';
import Input from '../../components/input'
import { registerSchema } from '../../constants/yup';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/use-auth';
import Header from '../../components/header';
import { registerService } from '../../services/auth';
import { useNavigate } from 'react-router-dom';


const Register = () => {

    const navigate = useNavigate()
    const { mode } = useAuth()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            username: '',
            perm:false
        },
        validationSchema: registerSchema,
        onSubmit: async values => {
            const response = await registerService(values)
            if (response.status === 200) {
                toast.success("Register successful")
                navigate("/login")
                console.log(response);
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
                <h5>Book Store Sign-Up</h5>
                <Input
                    title="E-mail"
                    name="email"
                    id="email"
                    className="register"
                    content="reg"
                    value={formik.values.email}
                    setValue={formik.handleChange("email")}
                    error={formik.errors.email}
                />
                <Input
                    title="Username"
                    name="username"
                    id="username"
                    className="register"
                    content="reg"
                    value={formik.values.username}
                    setValue={formik.handleChange("username")}
                    error={formik.errors.username}
                />
                <Input
                    title="Password"
                    name="password"
                    id="password"
                    className="register"
                    content="reg"
                    type="password"
                    value={formik.values.password}
                    setValue={formik.handleChange("password")}
                    error={formik.errors.password}
                />
                <Button
                    className="register"
                    type="submit"
                    click={formik.handleSubmit}
                    title="Sign-In"
                />
            </form>
        </div>
        </>
    )
}
export default Register