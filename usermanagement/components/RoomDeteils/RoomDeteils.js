import React from 'react'
import Image from "next/image";
import { Button } from '@mui/material';
import OverView from '../SingleResultPage/OverView/OverView';
import {useRouter} from 'next/router'
function RoomDeteils({data}) {
  const router = useRouter()
    const obj = {...data}
    const handlePush = () =>{
      router.push('/checkout')
    }
  return (
    <div className=' flex flex-col  sm:items-center xs:w-full sm:w-6/6'>
  <div className="flex w-full sm:w-3/5">
        <div className="w-full flex-1 h-56 sm:h-96 relative sm:w-4/6">
          <Image
            layout="fill"
            src={obj[0]?.imageUrls[0]}
            className="rounded-lg"
          />
        </div>
        <div className="flex sm:w-1/6 ml-1 flex-col justify-between">
          <div className="w-25 h-25 sm:w-48 sm:h-48">
            <Image
            layout= "responsive"
          src={obj[0]?.imageUrls[1]}
            className="rounded-lg"
            objectFit="cover"
            width={500}
            height={500}
          />
          <Image
            layout= "responsive"
          src={obj[0]?.imageUrls[2]}
            className="rounded-lg"
            objectFit="cover"
            width={500}
            height={500} />
          </div>
         
        </div>
        <div className="flex sm:w-1/6 ml-0 sm:ml-5 flex-col justify-between">
          <div className="w-25 h-25 sm:w-48 sm:h-48">
            <Image
            layout= "responsive"
          src={obj[0]?.imageUrls[2]}
            className="rounded-lg"
            objectFit="cover"
            width={500}
            height={500}
          />
          <Image
            layout= "responsive"
          src={obj[0]?.imageUrls[0]}
            className="rounded-lg"
            objectFit="cover"
            width={500}
            height={500} />
          </div>
         
        </div>
      </div>
        <div className='mt-2 sticky'>
           <Button variant='outlined' onClick={handlePush}>Reserve</Button>
        </div>
        <div className='flex w-6/6 sm:w-3/6 justify-start '>
        <div className='p-3'>
            <h2 className='font-semibold text-black'>{obj[0].title}  <span className='font-bold text-xl text-blue-900 ml-4'> $ {obj[0].price}</span></h2>
          <div className='w-full mt-1'>{obj[0].description}</div>
        <ul className='list-disc mt-1'>
          <li >price : {obj[0].price}</li>
          <li className='font-bold'>max-people : {obj[0].maxPeople}</li>
        </ul>
        </div>
    </div>
    </div>
  )
}

export default RoomDeteils