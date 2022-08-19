import { Button, Link, TextField, Typography } from "@mui/material";
import React from "react";
import { Formik } from "formik";
import { Box } from "@mui/system";
import PasswordStrengthBar from "react-password-strength-bar";
import { sendOtp, userRegister } from "../../APIs/Index";
import { useRouter } from "next/router";
import { useState } from "react";
import AuthConstant from "../../Constants/AuthConstant";
import { setCookie } from "cookies-next";
import Loding from "../Loader/Loading";
import RightSection from "../../Constants/RightSection";
import {userValidation} from '../../formValidation/SignupValidation'
import OtpConstant from "../../Constants/OtpConstant";


function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit">Booking</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Signup({ setState }) {
  const [error, setError] = useState("");
  const [open,setOpen] = useState(false)
  const [loader,setLoader] = useState(false)
  const [phone,setPhone] = useState('')
  const router = useRouter();
console.log(phone,'phone');

  // const otpFunction =async (values) =>{
  //   setDetails(values)
  //   await sendOtp(values.phone)
  //   setDetails(values)
  //   setOpen(true)
  // }

  const handleSubmit = async (e, values) => {
    e.preventDefault();
    try {
      setLoader(true)
      setPhone(values.phone)
      const res = await userRegister(values);
      if(res){
        console.log(res,'response before verification');
        await sendOtp(values.phone)
        setOpen(true)
      }
      // const Token = res.data;
      // if (Token) {
      //   setLoader(false)
      //   router.push("/");
      // }
    } catch (error) {
      if (error) {
        setLoader(false)
        setError(error.response.data.message);
      }
    }
  };

  
  return (
    <div className="flex flex-col items-center justify-center w-full flex-1   xl:px-20 text-center ">
      <div className="bg-white mt-28 rounded-2xl shadow-2xl flex md:w-2/3 max-w-4xl">
        <div className="w-3/5 m-8">
          <div>
            <h2 className="text-3xl mt-20 font-bold text-green-500">Sign Up</h2>
            <div className=" border-2 w-10 border-green-500 mt-3 inline-block mb-2"></div>

            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
                phone: "",
                confirmPassword: "",
              }}
              validationSchema={userValidation}
            >
              {({ handleChange, values, errors, touched, handleBlur }) => (
                <Box
                  component="form"
                  onSubmit={(e) => {
                    handleSubmit(e, values);
                  }}
                  sx={{ mt: 3 }}
                >
                  <div className="flex flex-col items-center mt-4">
                    {error ? <h6 className="text-red-500">{error}</h6> : ""}
                    <TextField
                      id="standard-basic"
                      label="First Name"
                      variant="standard"
                      style={{ marginBottom: "8px" }}
                      error={Boolean(touched.name && errors.name)}
                      helperText={touched.name && errors.name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.name}
                      name="name"
                    />
                    <TextField
                      id="standard-basic"
                      label="Email"
                      variant="standard"
                      style={{ marginBottom: "8px" }}
                      error={Boolean(touched.email && errors.email)}
                      helperText={touched.email && errors.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                      name="email"
                    />
                    <TextField
                      id="standard-basic"
                      label="Phone"
                      variant="standard"
                      style={{ marginBottom: "8px" }}
                      error={Boolean(touched.phone && errors.phone)}
                      helperText={touched.phone && errors.phone}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.phone}
                      name="phone"
                    />
                    <TextField
                      id="standard-basic"
                      label="Password"
                      variant="standard"
                      style={{ marginBottom: "8px" }}
                      error={Boolean(touched.password && errors.password)}
                      helperText={touched.password && errors.password}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.password}
                      name="password"
                    />
                    <PasswordStrengthBar
                      password={values.password}
                      minLength={6}
                    />
                    <TextField
                      id="standard-basic"
                      label="Confirm Password"
                      variant="standard"
                      style={{ marginBottom: "8px" }}
                      error={Boolean(
                        touched.confirmPassword && errors.confirmPassword
                      )}
                      helperText={
                        touched.confirmPassword && errors.confirmPassword
                      }
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.confirmPassword}
                      name="confirmPassword"
                    />

                    <Button
                      className="rounded-full mt-4 font-semibold"
                      type="submit"
                      variant="outlined"
                      disabled={Boolean(
                        errors.password ||
                          values.password === "" ||
                          errors.email ||
                          values.email === "" ||
                          errors.name ||
                          values.name === ""
                      )}
                    >
                     {loader ? <Loding /> :"Register"}
                    </Button>
                  </div>
                </Box>
              )}
            </Formik>
            <AuthConstant />
          </div>
          <Copyright sx={{ mt: 15 }} />
        </div>
      <RightSection setState={setState}/>
      </div>
      <OtpConstant open={open} setOpen={setOpen} phone={phone}/>
    </div>
  );
}

export default Signup;
