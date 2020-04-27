import * as yup from 'yup'


///FORM VALIDATION 

const FormValidation = yup.object().shape({
    name: yup
        .string()
        .required('Name is required!'),
    username: yup
        .string()
        .required('Username is required!'),
    password: yup
        .string()
        .required('Password is required!'),
    termsOfService: yup
        .boolean()
        .required("You must agree!!")
        .oneOf([true], "You must agree to the Terms of Service!")


})

export default FormValidation