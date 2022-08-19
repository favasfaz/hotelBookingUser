import twilio from "twilio";
export default async function otpHandling(req,res){
const {method} = req
if(method == 'GET'){
  console.log('hey');
   const {otp} = req.query
   console.log(otp,'otp');
    const client = twilio(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_AUTH_TOKEN
      )
     let num = `+91${otp}`;
     await client.verify.v2
        .services(process.env.TWILIO_SERVICE_ID)
        .verifications.create({ to: num, channel: "sms" })
        .then((verification) => {
          res.status(200).json(verification.sid)
        })
        .catch((err)=>{
          res.status(401).json(err)
        })
    }
    if(method == 'POST'){ 
      console.log('verification');
        const {phone,otp} = req.body
        console.log(phone,'phone',otp,'otp');
       
        let client = twilio(
            process.env.TWILIO_ACCOUNT_SID,
            process.env.TWILIO_AUTH_TOKEN
          );
         var num = `+91${phone}`;
          return client.verify
            .services(process.env.TWILIO_SERVICE_ID)
            .verificationChecks.create({ to: num, code: otp })
            .then((response)=>{
            res.status(200).json({message:"successfully registered"})
            })
            .catch((err)=>res.status(401).json({message:'Enter valid OTP'}))
    }
}