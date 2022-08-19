import { Button, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import Box from "@mui/material/Box";
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/People';

function NavbarSearch({ state }) {
  const [value, setValue] = useState([]);
  return (
    <div className="flex flex-col items-center mt-2 ">
      <div
        className={`flex flex-col sm:items-center   justify-center  bg-white rounded-lg shadow-2xl p-3 ${
          state && "sm:flex-row "
        }`}
      >
        <div className={`${!state && "my-5"}`}>
          <TextField
            id="filled-basic"
            label="Destination"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
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
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
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

        <div className={`${!state && "my-5"}`}>
          <TextField
            id="filled-basic"
            label="1 adult - 1 Room"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PeopleIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            size="small"
          />
        </div>
        <Button variant="outlined" >Search</Button>
      </div>
    </div>
  );
}

export default NavbarSearch;
