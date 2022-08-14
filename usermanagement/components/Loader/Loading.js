import React from 'react'
// import {PulseLoader} from "react-spinners/ClipLoader";
import { ThreeDots } from  'react-loader-spinner'


function Loading() {
  return (
    <div>
      <ThreeDots height='24' color = 'green' width="50"  />
    </div>
  )
}

export default Loading