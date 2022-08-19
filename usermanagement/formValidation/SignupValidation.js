import * as Yup from 'yup'

const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const userValidation = Yup.object().shape({
    name: Yup.string().required("Name is required").max(255),
    email: Yup.string()
      .email("Email must be valid")
      .required("Email is required")
      .max(255),
    password: Yup.string()
      .required("Password is required")
      .max(255)
      .min(6),
    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .max(10)
      .min(10),
    confirmPassword: Yup.string()
      .required("Password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  })