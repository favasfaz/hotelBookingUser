import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React, { useState } from "react";
import NavbarSearch from "../../Navbar/NavbarSearch";
import { useSelector } from "react-redux";

function SearchSection({ query }) {
  let data = useSelector((state) => state.category);
  const hotels = useSelector(state => state.hotel.hotels)
  const [filter, setFilter] = useState([]);
  data = data.categories.filter((v, i) => i < 4);

  const handleChange = (e) => {
    const ifExist = filter.indexOf(e.target.value)
    if(ifExist !== -1){
      filter.splice(ifExist,1)
    }
    else{
      setFilter(prev =>[...prev,e.target.value]);
    }
    const filteredData = filter.map(v=>{
     return hotels.map(hotel=>v ==hotel.category )
    })
    console.log(filteredData,'data after filter');
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
          {data.map((v, i) => {
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
      {/* <div className="font-mono">
        <div className="bg-slate-200 border-b-2 hidden sm:block border-blue-900  text-slate-600 p-3 ">
          <h2 className="underline my-3 text-black font-medium">
            Popular filters
          </h2>
          <div className="border  flex items-center justify-between">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Resorts"
              />
            </FormGroup>
            <p>123</p>
          </div>
          <div className="border  flex items-center justify-between">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Homestays"
              />
            </FormGroup>
            <p>123</p>
          </div>
          <div className="border  flex items-center justify-between">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Hotels"
              />
            </FormGroup>
            <p>123</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default SearchSection;
