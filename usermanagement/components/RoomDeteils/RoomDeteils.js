import React from 'react'
import Image from "next/image";
import { Button } from '@mui/material';

function RoomDeteils({data}) {
    const obj = {...data}
  return (
    <div className=' flex flex-col  sm:items-center xs:w-full sm:w-6/6'>
 <div className='flex w-3/5'>
        <div className='sm:w-3/6'>
        <Image
            layout="responsive"
            src={obj[0]?.imageUrls[0]}
            className="rounded-lg"
            height={500}
            width={500}
          />
        </div>
        <div className=' sm:w-3/6 flex'>
            <div className='w-96'>
            <Image
            layout="responsive"
          src={obj[0]?.imageUrls[1]}
            className="rounded-lg"
            height={500}
            width={500}
          />
           <Image
            layout="responsive"
          src={obj[0]?.imageUrls[2]}
            className="rounded-lg"
            height={500}
            width={500}
          />
            </div>
            <div  className='w-96 '>
            <Image
            layout="responsive"
          src={obj[0]?.imageUrls[0]}
            className="rounded-lg"
            height={500}
            width={500}
          />
           <Image
            layout="responsive"
          src={obj[0]?.imageUrls[1]}
            className="rounded-lg"
            height={500}
            width={500}
          />
            </div>
        </div>
        </div>
        <div>
           <Button variant='outlined'>Book Now</Button>
        </div>
    </div>
  )
}

export default RoomDeteils