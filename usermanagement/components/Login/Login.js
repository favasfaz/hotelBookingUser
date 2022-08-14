import {
  Avatar,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { BarLoader } from "react-spinners";
import { useRouter } from "next/router";
import ForgotPassword from "./ForgotPassword";
import { userLogin } from "../../APIs/Index";
import * as Yup from "yup";
import { Formik } from "formik";
import AuthConstant from "../../Constants/AuthConstant";
import Loding from "../Loader/Loading";
import { setCookie } from "cookies-next";

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

function Login({ state, setState }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [validationError, setValidationErr] = useState("");
  const [loader, setLoader] = useState(false);
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const [email, setEmail] = useState("");
  const isValid = email != null && email.trim().length > 0;

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async () => {
    try {
      setLoader(true);
      const password = values.password;
      const data = { email, password };
      const res = await userLogin(data);
      const Token = res.data;
      setCookie("userToken", Token);
      if (res) {
        setLoader(false);
        console.log('login success');
        router.push("/");
      }
    } catch (error) {
      console.log(error,'error');
      setLoader(false);
      setError(error.response.data.message);
    }
  };

  const handleForgot = () => {
    setLoading(true);
    setTimeout(() => {
      setForgotPassword(true);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full flex-1   xl:px-20 text-center ">
      <div className="bg-white mt-28 rounded-2xl shadow-2xl flex md:w-2/3 max-w-4xl">
        <div className="w-3/5 m-8">
          <div className="py-10">
            {loading && (
              <div className="flex items-center justify-center">
                <BarLoader width={200} />{" "}
              </div>
            )}
            {forgotPassword ? (
              <h2 className="text-3xl mt-20 font-bold text-green-500">
                Forgot Password
              </h2>
            ) : (
              <h2 className="text-3xl mt-20 font-bold text-green-500">
                Sign in to Account
              </h2>
            )}
            <div className=" border-2 w-10 border-green-500 mt-3 inline-block mb-2"></div>

            {!forgotPassword ? (
              <div
                className={
                  !loading
                    ? "flex flex-col items-center mt-4"
                    : "flex flex-col items-center mt-4  opacity-20"
                }
              >
                {error ? (
                  <h6 className="text-red-500">{error}</h6>
                ) : (
                  <h6 className="text-red-500">{validationError}</h6>
                )}

                <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">
                    Email
                  </InputLabel>
                  <Input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton aria-label="toggle password visibility">
                          <MailIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>

                <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">
                    Password
                  </InputLabel>
                  <Input
                    required
                    id="standard-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>

                <p
                  className="text-red-600 md:ml-28 mt-2 cursor-pointer "
                  onClick={handleForgot}
                >
                  Forgot password?
                </p>
                <button
                  type="submit"
                  disabled={!isValid}
                  onClick={handleSubmit}
                  className="border-2 mt-6 text-gray-500 border-green-500 rounded-full px-5 py-2 inline-block hover:bg-white hover:text-green-500 font-semibold"
                >
                  {loader ? <Loding /> : "Sign In"}
                </button>
              </div>
            ) : (
              <ForgotPassword setForgotPassword={setForgotPassword} />
            )}
            <AuthConstant />
          </div>
          <Copyright sx={{ mt: 15 }} />
        </div>
        <div className='w-2/5 bg-[url("../public/zayn.jpeg")] text-white rounded-tr-2xl rounded-br-2xl py-44 px-12'>
          <h2 className="text-3xl font-bold mb-2">Hello friends</h2>
          <div className=" border-2 w-10 border-white inline-block mb-2"></div>
          <p className="mb-10">
            Fill up personal information and start journey with us
          </p>
          <button
            onClick={() => setState(false)}
            disabled={loader}epozhano inform cheyunne
            className="border-2  border-white rounded-full px-12 py-2 inline-block hover:bg-white hover:text-green-500 font-semibold"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
