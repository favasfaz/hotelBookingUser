import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";

function Sample() {

return (
 <>
    {/* <PayPalScriptProvider options={{ "client-id": 'AdLX5S0ERMZGRUk22Qf0847wYhdhpQZN5NBc4gtpLoP-KogqYKqprsuOcr4LZBH2VuINyYIXhxKV4lyk' }}>
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
        </PayPalScriptProvider> */}
      <div class="container  bg-gray-300 w-full flex flex-col sm:flex-row justify-center sm:w-5/5">
    <div class="py-12 w-full sm:w-3/5">
        <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg md:max-w-xl mx-2">
            <div class="md:flex ">
                <div class="w-full p-4 px-5 py-5">
                    {/* <div class="flex flex-row">
                        <h2 class="text-3xl font-semibold">Athletic</h2>
                        <h2 class="text-3xl text-green-400 font-semibold">Greens</h2>
                    </div> */}
                    <div class="relative pb-5"> <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="E-mail" /> <span class="absolute text-blue-500 right-2 top-4 font-medium text-sm">Log out</span> </div> <span>Shipping Address</span>
                    <div class="grid md:grid-cols-2 md:gap-2"> <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="First name*" /> <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Last name*" /> </div> <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Company (optional)" /> <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Address*" /> <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Apartment, suite, etc. (optional)" />
                    <div class="grid md:grid-cols-3 md:gap-2"> <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Zipcode*" /> <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="City*" /> <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="State*" /> </div> <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Country*" /> <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Phone Number*" />
                    <div class="flex justify-between items-center pt-2"> <button type="button" class="h-12 w-24 text-blue-500 text-xs font-medium">Return to cart</button> <button type="button" class="h-12 w-48 rounded font-medium text-xs bg-blue-500 text-white">Continue to Shipping</button> </div>
                </div>
            </div>
        </div>
    </div>
    <div class="py-12 w-full sm:w-2/5">
        <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg md:max-w-xl mx-2">
            <div class="md:flex ">
                <div class="w-full p-4 px-5 py-5">
                    {/* <div class="flex flex-row">
                        <h2 class="text-3xl font-semibold">Athletic</h2>
                        <h2 class="text-3xl text-green-400 font-semibold">Greens</h2>
                    </div> */}
                    <div class="relative pb-5"> <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="E-mail" /> <span class="absolute text-blue-500 right-2 top-4 font-medium text-sm">Log out</span> </div> <span>Shipping Address</span>
                    <div class="grid md:grid-cols-2 md:gap-2"> <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="First name*" /> <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Last name*" /> </div> <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Company (optional)" /> <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Address*" /> <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Apartment, suite, etc. (optional)" />
                    <div class="grid md:grid-cols-3 md:gap-2"> <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Zipcode*" /> <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="City*" /> <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="State*" /> </div> <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Country*" /> <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Phone Number*" />
                    <div class="flex justify-between items-center pt-2"> <button type="button" class="h-12 w-24 text-blue-500 text-xs font-medium">Return to cart</button> <button type="button" class="h-12 w-48 rounded font-medium text-xs bg-blue-500 text-white">Continue to Shipping</button> </div>
                </div>
            </div>
        </div>
    </div>
</div>
 </>
);
}

export default Sample;

