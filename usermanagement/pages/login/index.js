import { getSession } from "next-auth/react";
import React, { useState } from "react";
import Login from "../../components/Login/Login";
import Signup from "../../components/SignUP/Signup";
import cookies from 'next-cookies'


function index() {
  const [state, setState] = useState(true);
  return (
    <div>
      {state ? (
        <Login state={state} setState={setState} />
      ) : (
        <Signup state={state} setState={setState} />
      )}
      {/* <Profile /> */}
    </div>
  );
}

export default index;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const { cookieToken } = cookies(context)
  if (session || cookieToken) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }
  return { props: {} };
}
