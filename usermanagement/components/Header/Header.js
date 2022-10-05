import React from "react";
// import { Us } from 'react-flags-icons'
import InfoIcon from "@mui/icons-material/Info";
import { useSession } from "next-auth/react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { Avatar } from "@mui/material";

function Header() {
  const router = useRouter();
  const users = useSelector((state) => state.users);
  const { data: session } = useSession();
  console.log(session?.user?.name,'session');
  const handleClick = () => {
    router.push("/login");
  };
  const handleHome = () => {
    router.push("/");
  };

  const handleProfile = () => {
    console.log('succes');
    router.push('/profile')
  };
  return (
    <div className="flex text-white justify-between  md:justify-around items-center p-5 bg-blue-900 border-b-2 border-gray-50">
      <div className="flex  items-center xs:mr-auto">
        <h2 className="font-semibold cursor-pointer" onClick={handleHome}>
          {" "}
          BOOK.now
        </h2>
      </div>
      <div className="flex ">
        {/* <Us className='mr-4 md:mr-20 w-10 mt-1' /> */}
        <h2 className="mr-4 md:mr-20">INR</h2>
        <InfoIcon className="mr-4 md:mr-20 cs" />
        <div className="flex items-center">
          <Avatar
            sx={{ height: "28px", width: "28px" }}
            alt="Remy Sharp"
            src={session?.user?.image}
          />
            {/* {session?.user?.name || users.user && (
              <h2 className="cursor-pointer ml-1" onClick={handleProfile}>
                {session?.user?.name || users?.user.name}
              </h2>
            )} */}
            {session?.user?.name && (
              <h2 className="cursor-pointer ml-1" onClick={handleProfile}>
              {session?.user?.name}
            </h2>
            )}
            {
              users.user &&(
                <h2 className="cursor-pointer ml-1" onClick={handleProfile}>
                {users?.user.name}
              </h2>
              )
            }
       
          {!session && !users.user.name && <h2 className="cursor-pointer" onClick={handleClick}>SignIn</h2> }
        </div>
      </div>
    </div>
  );
}

export default Header;
