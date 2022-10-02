import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchRooms } from "../../../Redux/RoomRedux";
import { Button } from "@mui/material";
import Image from "next/image";
import {useRouter} from 'next/router'

function Rooms({ rooms }) {
  const dispatch = useDispatch();
  const router = useRouter()
  const allRooms = useSelector((state) => state.rooms.rooms);
  const roomsInHotel = allRooms.filter((room) => rooms.includes(room._id));

  useEffect(() => {
    dispatch(FetchRooms());
  }, []);

  const handleClick = (id) =>{
    router.push(`/roomSearch/${id}`)
  }

  return (
    <div className="flex w-5/6 sm:w-3/6 justify-start ">
      <div
        className="flex px-2 md:px-3 justify-start
         whitespace-nowrap space-x-2 sm:space-x-4 overflow-x-scroll overscroll-y-none scrollbar-hide"
      >
        {
          roomsInHotel.length > 0 ? roomsInHotel.map((v)=>(
            <div className="w-52 cursor-pointer" >
          <Image
            layout="fixed"
            src={v.imageUrls[0]}
            className="rounded-lg"
            height="200"
            width="200"
            alt="categoryImage"
            objectFit="contain"
          />
           <div className="flex-col flex">
                <Button
                  size="small"
                  variant="outlined"
                >
                 Check Availability
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={()=>handleClick(v._id)}
                >
                  Deteils
                </Button>
              </div>
        </div>
          ))
          : <h1 className="mt-2 text-red-900 font-bold">No rooms found</h1>
        }
      </div>
    </div>
  );
}

export default Rooms;
