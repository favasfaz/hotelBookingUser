import React from "react";
// import { Us } from 'react-flags-icons'
import InfoIcon from "@mui/icons-material/Info";

function Header() {
  return (
    <div className="flex text-white justify-between  md:justify-around items-center p-5 bg-blue-900 border-b-2 border-gray-50">
      <div className="flex  items-center xs:mr-auto">
        <h2 className="font-semibold"> BOOK.now</h2>
      </div>
      <div className="flex ">
        {/* <Us className='mr-4 md:mr-20 w-10 mt-1' /> */}
        <h2 className="mr-4 md:mr-20">INR</h2>
        <InfoIcon className="mr-4 md:mr-20 cs" />
        <h2>Sign In</h2>
      </div>
    </div>
  );
}

export default Header;
