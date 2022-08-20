import { InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import OtpInput from "otp-input-react-18";
import OtpTimer from "otp-timer";
import { useRouter } from "next/router";
import Loading from "../Loader/Loading";
import { sendOtp, otpVerification, resetPassword, numberVerification } from "../../APIs/Index";
import PasswordIcon from "@mui/icons-material/Password";
import OtpConstant from "../../Constants/OtpConstant";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ForgotPassword() {
  const [state, setState] = useState({ otp: "" });
  const [open, setOpen] = React.useState(false);
  const [loader, setLoader] = useState(false);
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [newPassword, setNewPassword] = useState(false);
  const [password, setPassword] = useState("");

  const router = useRouter();
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validate = (e) => {
    if (!newPassword) {
      if (!phone.length) {
        setError("All field is required");
      } else if (
        phone.length < 10 ||
        phone.length > 10 ||
        phone == phoneRegExp
      ) {
        setError("please enter valid phone number");
      } else {
        setError("");
      }
    } else {
      if (password.length < 6) {
        return setError("password atleast 6 digit");
      }
    }
  };

  const handleClickOpen = async () => {
    validate();
    try {
      if (!error) {
       await numberVerification(phone)
        // sent otp
        await sendOtp(phone);
        setOpen(true);
      }
    } catch (error) {
      setError('Enter valid Number')
      console.log(error,'erro');
    }
    
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    try {
      setLoader(true);
      const verifiedUser = await otpVerification(phone, state.otp);
      if (verifiedUser) {
        setLoader(false);
        router.push("/");
      }
    } catch (error) {
      setLoader(false);
    }
  };

  const handleOtp = (otp) => setState({ otp });

  const handleResend = async () => {
    try {
      await sendOtp(phone);
    } catch (error) {
      console.log(error);
    }
  };

  const handleResetPassword = async () => {
    await resetPassword(phone, password);
    router.push("/");
  };

  return (
    <div>
      {newPassword ? (
        <div className="flex flex-col items-center mt-4">
          <p className="text-red-500">{error}</p>

          <TextField
            label="New Password"
            id="standard-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            required
            onBlur={validate}
            onChange={(e) => setPassword(e.target.value)}
            type="number"
            value={password}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PasswordIcon />{" "}
                </InputAdornment>
              ),
            }}
            variant="standard"
          />

          <button
            disabled={Boolean(!phone, error)}
            onClick={handleResetPassword}
            className="border-2 mt-6 text-gray-500 border-green-500 rounded-full px-5 py-2 inline-block hover:bg-white hover:text-green-500 font-semibold"
          >
            Reset Password
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center mt-4">
          <p className="text-red-500">{error}</p>

          <TextField
            label="Phone"
            id="standard-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            required
            onBlur={validate}
            onChange={(e) => setPhone(e.target.value)}
            type="number"
            value={phone}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+91 </InputAdornment>
              ),
            }}
            variant="standard"
          />

          <button
            disabled={Boolean(!phone, error)}
            onClick={handleClickOpen}
            className="border-2 mt-6 text-gray-500 border-green-500 rounded-full px-5 py-2 inline-block hover:bg-white hover:text-green-500 font-semibold"
          >
            Send OTP
          </button>
        </div>
      )}
      <OtpConstant
        open={open}
        setOpen={setOpen}
        phone={phone}
        setNewPassword={setNewPassword}
        newPassword={newPassword}
      />
    </div>
  );
}

export default ForgotPassword;
