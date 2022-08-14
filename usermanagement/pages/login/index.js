import { getSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Login from "../../components/Login/Login";
import Signup from "../../components/SignUP/Signup";
function index() {
  const [state, setState] = useState(true);

  return (
    <div>
      {state ? (
        <Login state={state} setState={setState} />
      ) : (
        <Signup state={state} setState={setState} />
      )}
    </div>
  );
}

export default index;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const isCookie = context.req.headers.cookie
  if (session || isCookie) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }
  return { props: {} };
}
