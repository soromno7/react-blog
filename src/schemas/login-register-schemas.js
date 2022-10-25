import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/;

export const registerSchema = yup.object({
    email: yup
    .string()
    .email('Enter a valid email')
    .required('required'),
    password: yup
    .string()
    .matches(passwordRules, {message: 'Create a stronger password'})
    .required('required'),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('required'),
})

export const loginSchema = yup.object({
    email: yup
    .string()
    .email('Enter a valid email')
    .required('required'),
    password: yup
    .string()
    .matches(passwordRules, {message: 'Create a stronger password'})
    .required('required'),
})

