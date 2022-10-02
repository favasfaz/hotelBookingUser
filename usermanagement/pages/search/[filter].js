import React from 'react'
import {useSelector} from 'react-redux'
import Header from '../../components/Header/Header'
import SingleResultPage from '../../components/SingleResultPage/SingleResultPage'
function filter({params}) {
  let data = useSelector(state =>state.hotel.hotels)
  data = data.filter(v=>v._id == params.filter)
  return (
    <div>
      <Header />
      <SingleResultPage data={data}/>
    </div>
  )
}

export default filter

export async function getServerSideProps(context) {
    const {params} = context
  return { props: {params:params} };
}