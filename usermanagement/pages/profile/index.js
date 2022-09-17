import React from 'react'
import Profile from '../../components/Profile/Profile'
import cookies from 'next-cookies'
import { getSession, providers } from "next-auth/react";

function index() {
  return (
    <div>
        <Profile />
    </div>
  )
}

export default index


export async function getServerSideProps(context) {
  const session = await getSession(context);
  const { cookieToken } = cookies(context)
  if (!session && !cookieToken) {
    return {
      redirect: {
        destination: "/login",
        permanent: true,
      },
    };
  }

  return { props: {} };
}
