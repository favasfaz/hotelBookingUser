

import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Link,
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
import AuthConstant from "../../Constants/AuthConstant";
import Loding from "../Loader/Loading";
import { useSelector, useDispatch } from "react-redux";
import { LoginUser } from "../../Redux/AuthSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import RightSection from '../../Constants/RightSection'


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
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const { register, handleSubmit } = useForm();
  const onSubmit =async(d) => {
      setLoader(true);
    const password = values.password;
    const email = d.email
    const data = { email, password };
    await dispatch(LoginUser(data));
    setLoader(false);
    if (users.error == "" && users.user) {
      router.push("/");
    } else {
      toast(users.error);
    }
  };

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [validationError, setValidationErr] = useState("");
  const [loader, setLoader] = useState(false);
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const [email, setEmail] = useState("");
  const isValid =
    values.password != null &&
    values.password.trim().length > 5;

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
        <div className="sm:w-3/5 w-5/5 m-8">
          <div className="py-10">
            {loading && (
              <div className="flex items-center justify-center">
                <BarLoader width={200} />{" "}
              </div>
            )}
            {forgotPassword ? (
              <h2 className="text-3xl mt-20 font-bold text-blue-900">
                Forgot Password
              </h2>
            ) : (
              <h2 className="text-3xl mt-20 font-bold text-blue-900">
                Sign in to Account
              </h2>
            )}
            <div className=" border-2 w-10 border-blue-900 mt-3 inline-block mb-2"></div>

            {!forgotPassword ? (
              <div
                className={
                  !loading
                    ? "flex flex-col items-center mt-4"
                    : "flex flex-col items-center mt-4  opacity-20"
                }
              >
                {users.error ? (
                  <h6 className="text-red-500">{users.error}</h6>
                ) : (
                  <h6 className="text-red-500">{validationError}</h6>
                )}
                   <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
                   <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
               <InputLabel htmlFor="standard-adornment-password">
                    Email
                  </InputLabel>
                 <Input
                    required
                    type="email"
                    {...register("email", { required: true, maxLength: 20 })}
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
                  disabled={!isValid || loader}
                  // onClick={handleSubmit}
                  className="border-2 mt-6 sm:w-30 w-none text-gray-500 border-blue-900 rounded-full px-5 py-2 inline-block hover:bg-white hover:text-blue-900 font-semibold"
                >
                  {loader ? <Loding /> : "Sign In"}
                </button>
                </form>
              </div>
            ) : (
              <ForgotPassword setForgotPassword={setForgotPassword} />
            )}
            {!forgotPassword && <AuthConstant />}
          </div>
          <Copyright sx={{ mt: 15 }} />
        </div>
        <RightSection state={state} setState={setState} loader={loader} />
      </div>
    </div>
  );
}

export default Login;
