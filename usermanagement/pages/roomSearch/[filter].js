import React from 'react'
import {useSelector} from 'react-redux'
import Header from '../../components/Header/Header'
import RoomDeteils from '../../components/RoomDeteils/RoomDeteils'
function filter({params}) {
  let data = useSelector(state =>state.rooms.rooms)
  data = data.filter(v=>v._id == params.filter)
  return (
    <div>
      <Header />
      <RoomDeteils data={data}/>
    </div>
  )
}

export default filter

export async function getServerSideProps(context) {
    const {params} = context
  return { props: {params:params} };
}