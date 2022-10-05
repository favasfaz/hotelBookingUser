import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";

function PaypalButton() {
  return (
    <div>
 <PayPalScriptProvider options={{ "client-id": 'AdLX5S0ERMZGRUk22Qf0847wYhdhpQZN5NBc4gtpLoP-KogqYKqprsuOcr4LZBH2VuINyYIXhxKV4lyk' }}>
            <PayPalButtons createOrder={async ()=>{
              try {
                const res = await axios.post('http://localhost:3000/api/payment')
                console.log(res);
                return res.data.id
              } catch (error) {
                console.log(error);
              }
            }} 
            onCancel={data =>console.log('canceled')}
            onApprove={(data,actions)=>{
              console.log(data,'data');
              actions.order.capture()
            }}
            style={{ layout: "vertical" }} />
        </PayPalScriptProvider>
    </div>
  )
}

export default PaypalButton