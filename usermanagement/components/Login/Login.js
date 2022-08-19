// import {
//   FormControl,
//   IconButton,
//   Input,
//   InputAdornment,
//   InputLabel,
//   Link,
//   Typography,
// } from "@mui/material";
// import React from "react";
// import MailIcon from "@mui/icons-material/Mail";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import { useState } from "react";
// import { BarLoader } from "react-spinners";
// import { useRouter } from "next/router";
// import ForgotPassword from "./ForgotPassword";
// import AuthConstant from "../../Constants/AuthConstant";
// import Loding from "../Loader/Loading";
// import { setCookie } from "cookies-next";
// import RightSection from "../../Constants/RightSection";
// import { useSelector, useDispatch } from "react-redux";
// import { LoginUser } from "../../Redux/AuthSlice";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit">Booking</Link> {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// function Login({ state, setState }) {
//   const dispatch = useDispatch();
//   const users = useSelector((state) => state.users);

//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [forgotPassword, setForgotPassword] = useState(false);
//   const [validationError, setValidationErr] = useState("");
//   const [loader, setLoader] = useState(false);
//   const [values, setValues] = React.useState({
//     password: "",
//     showPassword: false,
//   });
//   const [email, setEmail] = useState("");
//   const isValid =
//     email != null &&
//     email.trim().length > 0 &&
//     values.password != null &&
//     values.password.trim().length > 4;

//   const handleChange = (prop) => (event) => {
//     setValues({ ...values, [prop]: event.target.value });
//   };

//   const handleClickShowPassword = () => {
//     setValues({
//       ...values,
//       showPassword: !values.showPassword,
//     });
//   };

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//   const handleSubmit = async () => {
//     setLoader(true);
//     const password = values.password;
//     const data = { email, password };
//     await dispatch(LoginUser(data));
//     setLoader(false);
//     if (users.error == "" && users.user.token) {
//       toast("logined successfully")
//       setCookie('token',users.user.token);
//     router.push("/");
//     }else{
//       toast(users.error)
//     }
//   };

//   const handleForgot = () => {
//     setLoading(true);
//      setTimeout(()=>{
//       setForgotPassword(true);
//       setLoading(false);
//      },2000)
//   };

//   return (
//     <div className="flex flex-col items-center justify-center w-full flex-1   xl:px-20 text-center ">
//       <div className="bg-white mt-28 rounded-2xl shadow-2xl flex md:w-2/3 max-w-4xl">
//         <div className="w-3/5 m-8">
//           <div className="py-10">
//             {loading && (
//               <div className="flex items-center justify-center">
//                 <BarLoader width={200} />{" "}
//               </div>
//             )}
//             {forgotPassword ? (
//               <h2 className="text-3xl mt-20 font-bold text-green-500">
//                 Forgot Password
//               </h2>
//             ) : (
//               <h2 className="text-3xl mt-20 font-bold text-green-500">
//                 Sign in to Account
//               </h2>
//             )}
//             <div className=" border-2 w-10 border-green-500 mt-3 inline-block mb-2"></div>

//             {!forgotPassword ? (
//               <div
//                 className={
//                   !loading
//                     ? "flex flex-col items-center mt-4"
//                     : "flex flex-col items-center mt-4  opacity-20"
//                 }
//               >
//                 {/* {users.error ? (
//                   <h6 className="text-red-500">{users.error}</h6>
//                 ) : (
//                   <h6 className="text-red-500">{validationError}</h6>
//                 )} */}
//                 <ToastContainer  position="top-center" />
//                 <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
//                   <InputLabel htmlFor="standard-adornment-password">
//                     Email
//                   </InputLabel>
//                   <Input
//                     required
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     endAdornment={
//                       <InputAdornment position="end">
//                         <IconButton aria-label="toggle password visibility">
//                           <MailIcon />
//                         </IconButton>
//                       </InputAdornment>
//                     }
//                   />
//                 </FormControl>

//                 <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
//                   <InputLabel htmlFor="standard-adornment-password">
//                     Password
//                   </InputLabel>
//                   <Input
//                     required
//                     id="standard-adornment-password"
//                     type={values.showPassword ? "text" : "password"}
//                     value={values.password}
//                     onChange={handleChange("password")}
//                     endAdornment={
//                       <InputAdornment position="end">
//                         <IconButton
//                           aria-label="toggle password visibility"
//                           onClick={handleClickShowPassword}
//                           onMouseDown={handleMouseDownPassword}
//                         >
//                           {values.showPassword ? (
//                             <VisibilityOff />
//                           ) : (
//                             <Visibility />
//                           )}
//                         </IconButton>
//                       </InputAdornment>
//                     }
//                   />
//                 </FormControl>

//                 <p
//                   className="text-red-600 md:ml-28 mt-2 cursor-pointer "
//                   onClick={handleForgot}
//                 >
//                   Forgot password?
//                 </p>
//                 <button
//                   type="submit"
//                   disabled={!isValid || loader}
//                   onClick={handleSubmit}
//                   className="border-2 mt-6 text-gray-500 border-green-500 rounded-full px-5 py-2 inline-block hover:bg-white hover:text-green-500 font-semibold"
//                 >
//                   {loader ? <Loding /> : "Sign In"}
//                 </button>
//               </div>
//             ) : (
//               <ForgotPassword setForgotPassword={setForgotPassword} />
//             )}
//             {!forgotPassword && <AuthConstant />}
//           </div>
//           <Copyright sx={{ mt: 15 }} />
//         </div>
//         <RightSection state={state} setState={setState} loader={loader} />
//       </div>
//     </div>
//   );
// }

// export default Login;



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
import { setCookie } from "cookies-next";
import RightSection from "../../Constants/RightSection";
import { useSelector, useDispatch } from "react-redux";
import { LoginUser } from "../../Redux/AuthSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
    email != null &&
    email.trim().length > 0 &&
    values.password != null &&
    values.password.trim().length > 4;

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
    setLoader(true);
    const password = values.password;
    const data = { email, password };
    await dispatch(LoginUser(data));
    setLoader(false);
    if (users.error == "" && users.user.token) {
      toast("logined successfully")
      setCookie('token',users.user.token);
    router.push("/");
    }else{
      toast(users.error)
    }
  };

  const handleForgot = () => {
    setLoading(true);
     setTimeout(()=>{
      setForgotPassword(true);
      setLoading(false);
     },2000)
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
                {users.error ? (
                  <h6 className="text-red-500">{users.error}</h6>
                ) : (
                  <h6 className="text-red-500">{validationError}</h6>
                )}
                <ToastContainer  position="top-center" />
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
                  disabled={!isValid || loader}
                  onClick={handleSubmit}
                  className="border-2 mt-6 text-gray-500 border-green-500 rounded-full px-5 py-2 inline-block hover:bg-white hover:text-green-500 font-semibold"
                >
                  {loader ? <Loding /> : "Sign In"}
                </button>
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