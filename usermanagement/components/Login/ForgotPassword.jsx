import { FormControl, Input, InputAdornment, InputLabel } from "@mui/material";
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
import { sendOtp, otpVerification } from "../../APIs/Index";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ForgotPassword() {
  const [state, setState] = useState({ otp: "" });
  const [open, setOpen] = React.useState(false);
  const [loader, setLoader] = useState(false);
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleClickOpen = async () => {
    setOpen(true);
    // sent otp
    await sendOtp(email);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    try {
      setLoader(true);
      console.log(email, "email", state.otp, "otp");
      const verifiedUser = await otpVerification(email, state.otp);
      if (verifiedUser) {
        setLoader(false);
        router.push("/");
      }
    } catch (error) {
      setLoader(false);
      console.log(error, "error");
    }
  };

  const handleOtp = (otp) => setState({ otp });

  const handleResend = async () => {
    try {
      await sendOtp(email);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center mt-4">
        <FormControl variant="standard" sx={{ marginBottom: "10px" }}>
          <InputLabel htmlFor="standard-adornment-password">
            {" "}
            Phone Number
          </InputLabel>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="standard-adornment-password"
            type="number"
            endAdornment={
              <InputAdornment position="end">
                <PhoneIphoneIcon />
              </InputAdornment>
            }
          />
        </FormControl>

        <button
          onClick={handleClickOpen}
          className="border-2 mt-6 text-gray-500 border-green-500 rounded-full px-5 py-2 inline-block hover:bg-white hover:text-green-500 font-semibold"
        >
          Send OTP
        </button>
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"zeeBooking"}</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            className="font-semibold"
          >
            Please enter the OTP sent to {email}.{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={handleClose}
            >
              Change
            </span>
          </DialogContentText>
          <div className="mt-3 ">
            <OtpInput
              shouldAutoFocus={true}
              className="text-blue-500 p-5"
              value={state.otp}
              onChange={(e) => {
                handleOtp(e);
              }}
              numInputs={6}
              separator={<span>_</span>}
            />
            <div className="flex justify-between">
              <OtpTimer
                seconds={30}
                minutes={0}
                ButtonText="Resend OTP"
                buttonColor={"black"}
                background={"none"}
                resend={handleResend}
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="outlined" disabled={loader} onClick={handleSubmit}>
            {loader ? <Loading /> : "Send"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ForgotPassword;
