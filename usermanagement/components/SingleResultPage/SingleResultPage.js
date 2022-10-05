import React, { useState, useEffect } from "react";
import Image from "next/image";
import OverView from "./OverView/OverView";
import "react-toastify/dist/ReactToastify.css";
import Rooms from "./Rooms/Rooms";
import { useForm } from 'react-hook-form';
import { Button, InputAdornment, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import Box from "@mui/material/Box";
import PeopleIcon from '@mui/icons-material/People';
import { useDispatch, useSelector } from "react-redux";
import {FetchRooms} from '../../Redux/RoomRedux'
function SingleResultPage({ data }) {
  const dispatch = useDispatch();
  const obj = { ...data };

  const [overView, setOverView] = useState(true);
  const [rooms, setRooms] = useState(false);
  const [date, setDate] = useState([]);

  const allRooms = useSelector((state) => state.rooms.rooms);
  const roomsInHotel = allRooms.filter((room) => obj[0]?.rooms.includes(room._id));

  console.log(roomsInHotel);
  const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });

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

  useEffect(() => {
    dispatch(FetchRooms());
  }, []);

  const res = []
  const onSubmit =async(data)=>{
date.forEach(d => {
  roomsInHotel?.isNotAvailable?.forEach(a => {
    if (!(d[0] >= a) && (d[1] <= a)){
      res.push(a._id)
    }
  })
})
     }
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
      <div className="flex w-full mt-2 sm:w-3/5 justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
       <div
        className="flex flex-col sm:flex-row sm:items-center justify-center w-full bg-white rounded-lg shadow-2xl p-3 "
      >
         <div className="my-2">
          <LocalizationProvider
            dateAdapter={AdapterMoment}
            localeText={{ start: "Check-in", end: "Check-out" }}
          >
            <DateRangePicker
              value={date}
              onChange={(newValue) => {
                setDate(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField {...startProps} size="small" />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField {...endProps} size="small" />
                </React.Fragment>
              )}
            />
          </LocalizationProvider>
        </div>

        <div >
          <TextField
            id="filled-basic"
            label= "2 adult - 1 Room"
            // placeholder={query && query.count }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PeopleIcon />
                </InputAdornment>
              ),
            }}
            {...register("count", { required: "required field" })} // custom message
            // value={count}
            // onChange={(e)=>setCount(e.target.value)}
            variant="outlined"
            size="small"
          />
        </div>
        <Button variant="outlined" type="submit" >Change</Button>
      </div>
   </form>
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
      {rooms && <Rooms rooms={res.length == 0 ? obj[0]?.rooms : res} />}
      {/* Location */}

      {/* Amenties */}

      {/* Policies */}

      {/* Reviews */}
    </div>
  );
}

export default SingleResultPage;
