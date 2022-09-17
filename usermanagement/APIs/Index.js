import axios from "axios";
import { deleteCookie, getCookie } from "cookies-next";

//user Register
export const userRegister = async (data) => {
  return await axios({
    url: "/api/userhandle",
    method: "post",
    data: data,
  });
};

// User verified
export const userVerification = async (data) => {
  return await axios({
    url: "/api/userhandle",
    method: "post",
    data: {
      type: "register",
      data: data,
    },
  });
};

//user Login
export const userLogin = async (data) => {
  return await axios({
    url: "/api/userhandle",
    method: "post",
    data: {
      type: "login",
      data: data,
    },
  });
};

//sending OTP

export const sendOtp = async (phone) => {
  return await axios.get(`/api/userhandle/otp?otp=${phone}`);
};

//OTP verification
export const otpVerification = async (phone, otp) => {
  let data = { phone, otp };
  return await axios.post("/api/userhandle/otp", data);
};


//resetPassword
export const resetPassword = async (phone, password) => {
  let data = { phone, password };
  return await axios({
    url: "/api/userhandle",
    method: "post",
    data: {
      type: "resetPassword",
      data: data,
    },
  });
};

//phoneNumber verification
export const numberVerification = async(phone) =>{
  return await axios.get(`/api/userhandle?phone=${phone}`);
}

//user Profile Edit
export const profileEdit = async(data) =>{
const token = getCookie('cookieToken')
return await axios.put('/api/userhandle/profile',data,{headers:{authtoken:token}})
}

export const changePassword = async(datas) =>{
  const token = getCookie('cookieToken')
  const data = {type:'resetPassword',data:datas}
return await axios.put('/api/userhandle/profile',data,{headers:{authtoken:token}})
}