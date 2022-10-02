import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React, { useState } from "react";
import NavbarSearch from "../../Navbar/NavbarSearch";
import { useSelector } from "react-redux";
import {useRouter} from 'next/router'



function SearchSection({ query }) {
  const [loader,setLoader]= useState(true)
  const router = useRouter()
  let data = useSelector((state) => state.category);
  data = data.categories.filter((v, i) => i < 4);
  const handleChange = async(e) => {
    router.push(`/search?filterBy=${e.target.value}&&destination=${query.destination}`)
  };

  return (
    <div className="md:w-80 w-full mt-3 flex-col bg-white">
      <div className="bg-slate-200 p-3">
        <h2 className="text-lg">Search</h2>
        <NavbarSearch query={query} />
      </div>
      <div className="font-mono">
        <div className="bg-slate-200 border-b-2 border-blue-900 text-slate-600 p-3 mt-3">
          <h2 className="underline my-3 font-medium text-black ">Filter by:</h2>
          {data .map((v, i) => {
            return (
              <div className="border  flex items-center justify-between">
                <FormGroup>
                  <FormControlLabel
                    onChange={(e) => handleChange(e)}
                    control={<Checkbox size="small" value={v._id} />}
                    label={v.category}
                  />
                </FormGroup>
                <p>123</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
