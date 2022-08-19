import React from 'react'
import Image from "next/image";


function OfferSection() {
  return (
    <div class="md:container md:mx-auto my-4   bg-white shadow-xl">
        <div className='p-3 mt-8 text-red-600 font-mono flex font-semibold' >
            <h2 className='text-2xl underline'> Deal Of The Day</h2>
        </div>
        <div className='flex justify-around font-serif m-3
         whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll overscroll-y-none scrollbar-hide'
        >
            <h2 className='cursor-pointer transition duration-200
                     transform hover:scale-110 hover:text-blue-900
                      '>Mumbai</h2>
            <h2 className='cursor-pointer transition duration-200
                     transform hover:scale-110 hover:text-blue-900'>Mumbai</h2>
            <h2 className='cursor-pointer transition duration-200
                     transform hover:scale-110 hover:text-blue-900'>Mumbai</h2>
            <h2 className='cursor-pointer transition duration-200
                     transform hover:scale-110 hover:text-blue-900'>Mumbai</h2>
            <h2 className='cursor-pointer transition duration-200
                     transform hover:scale-110 hover:text-blue-900'>Mumbai</h2>
            <h2 className='cursor-pointer transition duration-200
                     transform hover:scale-110 hover:text-blue-900'>Mumbai</h2>
            <h2 className='cursor-pointer transition duration-200
                     transform hover:scale-110 hover:text-blue-900'>Mumbai</h2>
           
        </div>
      <div className='flex justify-evenly'>
      <div className='w-52'>
       <Image layout='responsive' 
        src='/zayn.jpeg'
        className='rounded-lg'
        height={500}
        width={500}
        />
        <div className='mt-1 flex justify-between'>
            <p>5 stars</p>
            <p>4.5</p>
        </div>
        <div>hotel Name</div>
        <div>$1234 <del>$1299</del></div>
       </div>
       <div className='w-52'>
       <Image layout='responsive' 
        src='/zayn.jpeg'
        className='rounded-lg'
        height={500}
        width={500}
        />
        <div className='mt-1 flex justify-between'>
            <p>5 stars</p>
            <p>4.5</p>
        </div>
        <div>hotel Name</div>
        <div>$1234 <del>$1299</del></div>
       </div>
      </div>
       
       
</div>
  )
}

export default OfferSection