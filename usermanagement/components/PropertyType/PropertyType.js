import React from 'react'
import Image from "next/image";


function PropertyType() {
  return (
    <div className="md:container md:mx-auto my-4   bg-white shadow-xl">
    <div className='p-3 mt-8 text-red-600 font-mono flex font-semibold' >
        <h2 className='text-2xl underline'> Browse by property type</h2>
    </div>
   
  <div className='flex justify-evenly'>
  <div className='w-52'>
   <Image layout='responsive' 
    src='/zayn.jpeg'
    className='rounded-lg'
    height={500}
    width={500}
    />
    <div>Hotel</div>
   </div>
   <div className='w-52'>
   <Image layout='responsive' 
    src='/zayn.jpeg'
    className='rounded-lg'
    height={500}
    width={500}
    />
    <div>Villa</div>
   </div>
   <div className='w-52'>
   <Image layout='responsive' 
    src='/zayn.jpeg'
    className='rounded-lg'
    height={500}
    width={500}
    />
    <div>Apartments</div>
   </div>
  </div>
   
   
</div>
  )
}

export default PropertyType