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
    email: yup
        .string()
        .email('Please enter a valid email address')
        .required('E-mail address is required'),
    username: yup
        .string()
        .min(3, 'Must be at least 3 characters')
        .max(16, 'Must be a maximum of 16 characters')
        .required('User name is required'),
    password: yup
        .string()
        .min(6, 'Must be at least 6 characters')
        .max(16, 'Must be a maximum of 16 characters')
        .required('Password is required'),
    perm:yup
        .boolean()
});

export {
    loginSchema,
    registerSchema
}