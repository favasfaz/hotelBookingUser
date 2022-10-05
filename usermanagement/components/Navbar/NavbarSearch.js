import { Button, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import Box from "@mui/material/Box";
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/People';
import {useRouter} from 'next/router'
import { useForm } from 'react-hook-form';


function NavbarSearch({ state,query }) {
  const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });

  const router = useRouter()
  const [date, setDate] = useState([]);
// console.log(query,'query');
//  let dates = query?.date?.split()
// console.log(dates[0]);
  const onSubmit =async(data)=>{
 const {destination,count} = data
    router.push(`/search?date=${date}&&destination=${destination}&&count=${count}`)
  }
  
  return (
    <div className="flex flex-col items-center mt-2 ">
   <form onSubmit={handleSubmit(onSubmit)}>
       <div
        className={`flex flex-col sm:items-center justify-center  bg-white rounded-lg shadow-2xl p-3 ${
          state && "sm:flex-row "
        }`}
      >
        <div className={`${!state && "my-5"}`}>
          <TextField
            id="filled-basic"
            label="Destination"
            placeholder={query && query.destination }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            {...register("destination", { required: "required field" })} // custom message
            variant="outlined"
            size="small"
          />
        </div>

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
                  <TextField  {...startProps} size="small" />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField  {...endProps} size="small" />
                </React.Fragment>
              )}
            />
          </LocalizationProvider>
        </div>

        <div className={`${!state && "my-5"}`}>
          <TextField
            id="filled-basic"
            label= "1 adult - 1 Room"
            placeholder={query && query.count }
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
        <Button variant="outlined" type="submit" >Search</Button>
      </div>
   </form>
    </div>
  );
}

export default NavbarSearch;
