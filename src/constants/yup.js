import * as yup from 'yup';

const loginSchema = yup.object().shape({
    identifier: yup
        .string()
        .email('Please enter a valid email address')
        .required('E-mail address is required'),
    password: yup
        .string()
        .min(6, 'Must be at least 6 characters')
        .max(16, 'Must be a maximum of 16 characters')
        .required('Password is required')
});


const registerSchema = yup.object().shape({
    username: yup
        .string()
        .min(6, 'En az 3 karakter olmalı')
        .max(16, 'En fazla 24 karakter olmalı')
        .required('Kullanıcı adı zorunludur'),
    email: yup
        .string()
        .email('Lütfen geçerli bir eposta adresi giriniz')
        .required('Eposta adresi zorunludur'),
    password: yup
        .string()
        .min(6, 'En az 6 karakter olmalı')
        .max(16, 'En fazla 16 karakter olmalı')
        .matches(/[a-zA-Z]/, 'Sadece harfler')
        .required('Şifre zorunludur')
});

export {
    loginSchema,
    registerSchema
}