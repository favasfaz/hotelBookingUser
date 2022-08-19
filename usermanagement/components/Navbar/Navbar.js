import React from "react";
import HotelIcon from '@mui/icons-material/Hotel';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import NavBarItem from "./NavBarItem";
import NavbarSearch from "./NavbarSearch";

function Navbar() {
  return (
    <div className=' bg-[url("../public/trip.webp")]'>
      <div className="flex flex-col text-blue-900 items-center p-3 sm:p-24 font-mono ">
        <h2 className=" sm:text-4xl text-base">
          Book Domestic & International Flight Online
        </h2>
      </div>
      <div className="flex flex-col justify-between items-center ">
        <div className="flex flex-grow justify-center max-w-2xl bg-gray-100 rounded-lg shadow-md">
          <NavBarItem title={"Flight"} Icon={FlightLandIcon} />
          <NavBarItem title={"Hotel"} Icon={HotelIcon} />
          <NavBarItem title={"Bus"} Icon={DirectionsBusIcon} />
          <NavBarItem title={"Car"} Icon={DirectionsCarIcon} />
          <NavBarItem title={"Villa"} Icon={HolidayVillageIcon} />
          {/* <NavBarItem title={"Home"} Icon={UserIcon} /> */}
        </div>
      </div>
      <NavbarSearch state={true} />
    </div>
  );
}

export default Navbar;
