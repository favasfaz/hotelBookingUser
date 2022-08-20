import axios from "axios";

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
  console.log("log apiindex");
  console.log(data, "api index data");
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
  console.log(data, "datafrom index");
  return await axios.post("/api/userhandle/otp", data);
};


//resetPassword
export const resetPassword = async (phone, password) => {
  console.log("reset function working");
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
  console.log('phone numver verification');
  return await axios.get(`/api/userhandle?phone=${phone}`);
}