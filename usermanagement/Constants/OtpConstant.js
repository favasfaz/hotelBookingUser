import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import OtpInput from "otp-input-react-18";
import OtpTimer from "otp-timer";
import Loading from "../components/Loader/Loading";
import Slide from "@mui/material/Slide";
import { otpVerification, userVerification } from "../APIs/Index";
import { useRouter } from "next/router";

import { Typography } from "@mui/material";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function OtpConstant({ open, setOpen, phone, setNewPassword, newPassword }) {
  const [state, setState] = useState({ otp: "" });
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    console.log("otp handleOtp");
    try {
      setLoader(true);
      const verifiedUser = await otpVerification(phone, state.otp);
      if (verifiedUser) {
        console.log("verification success");
        setLoader(false);
        if (newPassword === false) {
          console.log("success");
          setNewPassword(true);
          return handleClose();
        }
        console.log("registering user success");
        console.log(phone,'phone');
        await userVerification(phone);
        handleClose();
        router.push("/");
      }
    } catch (error) {
      console.log(error, "eroooooooooooooooooooooooooooooooooorrr");
      setError(true);
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

  return (
    <div>
      <Dialog
        fullWidth
        open={open}
        TransitionComponent={Transition}
        //   onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"zeeBooking"}</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            className="font-semibold"
          >
            Please enter the OTP sent to {phone}.{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={handleClose}
            >
              Change
            </span>
          </DialogContentText>
          {error && (
            <Typography variant="h6" color="error">
              Enter valid OTP
            </Typography>
          )}
          <div className="mt-3 ">
            <OtpInput
              inputStyle={{
                width: "2rem",
                height: "2rem",
                margin: "20px 0.25rem",
                fontSize: "2rem",
                borderRadius: 4,
                border: "1px solid #051b34",
              }}
              isInputNum={true}
              shouldAutoFocus={true}
              className="text-blue-500 p-5"
              value={state.otp}
              onChange={(e) => {
                handleOtp(e);
              }}
              numInputs={6}
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

export default OtpConstant;
