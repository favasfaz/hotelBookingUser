import React from "react";

function NavBarItem({ Icon, title }) {
  return (
    <div className="flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-blue-900 group  mt-5">
      <Icon className="h-6 group-hover:animate-bounce text-blue-900" />
      <h4 className="opacity-0 group-hover:opacity-100">{title}</h4>
    </div>
  );
}

export default NavBarItem;
