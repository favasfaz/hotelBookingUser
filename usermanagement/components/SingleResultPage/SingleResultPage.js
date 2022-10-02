import React, { useState, useEffect } from "react";
import Image from "next/image";
import OverView from "./OverView/OverView";
import "react-toastify/dist/ReactToastify.css";
import Rooms from "./Rooms/Rooms";

function SingleResultPage({ data }) {
  const [overView, setOverView] = useState(true);
  const [rooms, setRooms] = useState(false);

  const handleClick = (v) => {
    if (v == 1) {
      setRooms(false);
      setOverView(true);
    }
    if (v == 2) {
      setOverView(false);
      setRooms(true);
    }
  };
  const obj = { ...data };
  return (
    <div className=" flex flex-col  sm:items-center xs:w-full sm:w-6/6">
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
          src={obj[0]?.imageUrls[3]}
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

      {/* information */}
      <div className="flex gap-3 text-blue-900 md:gap-5 w-5/6 sm:w-3/6 justify-start m-4 font-bold ">
        <h2
            className={`border-b-4 cursor-pointer ${overView &&'border-blue-900'}`}
          onClick={() => handleClick(1)}
        >
          OverView
        </h2>
        <h2
          className={`border-b-4 cursor-pointer ${rooms && 'border-blue-900'}`}
          onClick={() => handleClick(2)}
        >
          Rooms
        </h2>
      </div>

      {/* Overview */}
      {overView && (
        <OverView
          name={obj[0]?.name}
          discription={obj[0]?.discription}
          phone={obj[0]?.phone}
          location={obj[0]?.city}
          distance = {obj[0]?.distance}
        />
      )}
      {/* Rooms */}
      {rooms && <Rooms rooms={obj[0]?.rooms} />}
      {/* Location */}

      {/* Amenties */}

      {/* Policies */}

      {/* Reviews */}
    </div>
  );
}

export default SingleResultPage;
