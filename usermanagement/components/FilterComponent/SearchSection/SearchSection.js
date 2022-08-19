import { Checkbox, FormControlLabel, FormGroup, InputAdornment, TextField } from "@mui/material";
import React from "react";
import NavbarSearch from "../../Navbar/NavbarSearch";

function SearchSection() {
  return (
    <div className="md:w-80 w-full mt-3 flex-col bg-white">
      <div className="bg-slate-200 p-3">
        <h2 className="text-lg">Search</h2>
        <NavbarSearch />
      </div>
     <div className="font-mono">
     <div className="bg-slate-200 border-b-2 border-blue-900 text-slate-600 p-3 mt-3">
      <h2 className="underline my-3 font-medium text-black ">Filter by:</h2>
      <div className="border  flex items-center justify-between">
        <FormGroup >
        <FormControlLabel  control={<Checkbox  size="small"/>} label="Homestays" />
      </FormGroup>
      <p>123</p>
      </div>
      <div className="border  flex items-center justify-between">
        <FormGroup >
        <FormControlLabel  control={<Checkbox  size="small"/>} label="Hotels" />
      </FormGroup>
      <p>123</p>
      </div>
      <div className="border  flex items-center justify-between">
        <FormGroup >
        <FormControlLabel  control={<Checkbox  size="small"/>} label="5 stars" />
      </FormGroup>
      <p>123</p>
      </div>
      </div>
     </div>
     <div className="font-mono">
     <div className="bg-slate-200 border-b-2 hidden sm:block border-blue-900  text-slate-600 p-3 ">
      <h2 className="underline my-3 text-black font-medium">Popular filters</h2>
      <div className="border  flex items-center justify-between">
        <FormGroup >
        <FormControlLabel  control={<Checkbox  size="small"/>} label="Resorts" />
      </FormGroup>
      <p>123</p>
      </div>
      <div className="border  flex items-center justify-between">
        <FormGroup >
        <FormControlLabel  control={<Checkbox  size="small"/>} label="Homestays" />
      </FormGroup>
      <p>123</p>
      </div>
      <div className="border  flex items-center justify-between">
        <FormGroup >
        <FormControlLabel  control={<Checkbox  size="small"/>} label="Hotels" />
      </FormGroup>
      <p>123</p>
      </div>
      </div>
     </div>
    </div>
  );
}

export default SearchSection;
