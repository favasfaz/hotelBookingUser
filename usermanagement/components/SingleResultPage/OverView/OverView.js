import React from 'react'

function OverView({name,discription,phone,location,distance}) {
  return (
    <div className='flex w-6/6 sm:w-3/6 justify-start '>
        <div className='p-3'>
            <h2 className='font-semibold text-black text-xl'>About {name}</h2>
          <div className='w-full mt-1'>{discription}</div>
          <div className='w-full mt-2'>{distance}</div>
        <ul className='list-disc mt-1'>
          <li >phone : {phone}</li>
          <li className='font-bold'>location : {location}</li>
        </ul>
        </div>
    </div>
  )
}

export default OverView