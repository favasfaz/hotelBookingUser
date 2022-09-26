import React from 'react'

function filter() {
  return (
    <div>filter</div>
  )
}

export default filter

export async function getServerSideProps(context) {
    const {params,query} = context
  return { props: {} };
}