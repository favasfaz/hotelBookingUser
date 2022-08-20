import React from 'react'
// import {PulseLoader} from "react-spinners/ClipLoader";
import { ThreeDots } from  'react-loader-spinner'


function Loading() {
  return (
    <div className='flex justify-center items-center'>
      <ThreeDots height='24' color = 'green' width="50"  />
    </div>
  )
}

export default Loading