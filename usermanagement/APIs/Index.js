import axios from "axios";


//user Register
export const userRegister = async (data) => {
  return await axios({
    url: "/api/userhandle",
    method: "post",
    data: data,
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

export const sendOtp = async(phone) =>{
  await axios.get(`/api/userhandle/otp?otp=${phone}`)
}

//OTP verification
export const otpVerification = async(otp,phone)=>{
  let data = {otp,phone}
  console.log(data,'datafrom index');
await axios.post('/api/userhandle/otp',data)
}