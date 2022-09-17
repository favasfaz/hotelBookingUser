import React from 'react'
import { useRouter } from "next/router";
function RightSection({state,setState}) {
  const router = useRouter()
  const handlePush =()=>{
    router.push('/')
  }
  return (
    <div className='w-2/5 bg-[url("../public/rightSection.jpeg")] text-white rounded-tr-2xl hidden sm:block rounded-br-2xl py-44 px-12'>
    <h2 className="text-3xl font-bold mb-2 cursor-pointer" onClick={handlePush}>Booking.com</h2>
    <div className=" border-2 w-10 border-white inline-block mb-2"></div>
    <p className="mb-10">
      Fill up personal information and start journey with us
    </p>
    <button
      onClick={() => setState(!state)}
      className="border-2  border-white rounded-full px-12 py-2 inline-block hover:bg-white hover:text-green-500 font-semibold"
    >
      {state ? 'Sign Up' :'Sign In'}
    </button>
  </div>
  )
}

export default RightSection