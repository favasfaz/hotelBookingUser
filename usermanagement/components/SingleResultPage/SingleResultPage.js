import React from 'react'
import Image from "next/image";
import OverView from './OverView/OverView';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SingleResultPage() {
    const notify = () => toast("Wow so easy!");

  return (
    <div className=' flex flex-col  sm:items-center xs:w-full sm:w-6/6'>
        <div className='flex w-3/5'>
        <div className='sm:w-3/6'>
        <Image
            layout="responsive"
            src="/zayn.jpeg"
            className="rounded-lg"
            height={500}
            width={500}
          />
        </div>
        <div className='sm:w-3/6 flex'>
            <div className='w-96'>
            <Image
            layout="responsive"
            src="/zayn.jpeg"
            className="rounded-lg"
            height={500}
            width={500}
          />
           <Image
            layout="responsive"
            src="/zayn.jpeg"
            className="rounded-lg"
            height={500}
            width={500}
          />
            </div>
            <div className='w-96'>
            <Image
            layout="responsive"
            src="/zayn.jpeg"
            className="rounded-lg"
            height={500}
            width={500}
          />
           <Image
            layout="responsive"
            src="/zayn.jpeg"
            className="rounded-lg"
            height={500}
            width={500}
          />
            </div>
        </div>
        </div>

        {/* information */}
        <div className='flex gap-3 md:gap-2 w-5/6 sm:w-3/6 justify-between m-7 font-bold '>
        <h2 className='border-b-4 active:border-blue-900'>OverView</h2>
        <h2 className='border-b-4 active:border-blue-900'>Rooms</h2>
        <h2 className='border-b-4 active:border-blue-900'>Location</h2>
        <h2 className='border-b-4 active:border-blue-900'>Amenties</h2>
        <h2 className='border-b-4 active:border-blue-900'>Policies</h2>
        <h2 className='border-b-4 active:border-blue-900'>Reviews</h2>
        </div>

        {/* Overview */}
        <OverView />
        {/* Rooms */}

        {/* Location */}

        {/* Amenties */}

        {/* Policies */}

        {/* Reviews */}
    </div>
  )
}

export default SingleResultPage