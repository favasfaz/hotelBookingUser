import React from 'react'
import PaypalButton from './PaypalButton'

function Checkout() {
  return (
    <div class="container  w-full flex sm:flex-row sm:w-6/6">
    
    <div class="py-12 w-full sm:w-2/5">
        <div class="w-full mx-auto bg-white shadow-lg rounded-lg  mx-2">
            <div class="md:flex ">
                <div class="w-full p-4 px-5 py-5">
                    <div class="flex flex-row">
                        <h2 class="text-xl font-semibold">Your</h2>
                        <h2 class="text-xl  font-semibold">Booking Deteils</h2>
                    </div>
                    <div class="flex pb-5">
                        <div className='flex flex-col mt-2 text-sm'>
                            <h6>check IN</h6>
                            <h6>check IN</h6>
                            <h6>check IN</h6>
                        </div>
                        <div className='flex flex-col ml-10 mt-2 text-sm'>
                            <h6>check Out</h6>
                            <h6>check Out</h6>
                            <h6>check Out</h6>
                        </div>
                        </div> 
                    </div>
            </div>
        </div>
    </div>
    <div class="py-12 w-full sm:w-3/5">
        <div class="w-full mx-auto bg-white shadow-lg rounded-lg  mx-2">
            <div class="md:flex ">
                <div class="w-full p-4 px-5 py-5">
                    {/* <div class="flex flex-row">
                        <h2 class="text-3xl font-semibold">Athletic</h2>
                        <h2 class="text-3xl text-green-400 font-semibold">Greens</h2>
                    </div> */}
                    <div class="relative pb-5"> <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="E-mail" /> </div> 
                    <div class="grid md:grid-cols-2 md:gap-2"> <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="First name*" /> <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Last name*" /> </div> <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Company (optional)" /> <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Address*" /> <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Apartment, suite, etc. (optional)" />
                    <div className='w-24 mt-2'>
                        <PaypalButton />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Checkout