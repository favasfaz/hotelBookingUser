import React from 'react'
import {useSelector} from 'react-redux'
import FilterComponent from '../../components/FilterComponent/FilterComponent';
import Header from '../../components/Header/Header';
function index({query}) {
   const data = useSelector(state =>state.hotel)
 const filterData = data.hotels.filter((v)=>v.city == query.destination)
 if(filterData == undefined) {console.log('no data found');}
  return (
    <div>
        <Header />
        <FilterComponent data={filterData} query={query}/>
    </div>
  )
}

export default index

export async function getServerSideProps(context) {
    const {query} = context
  return { 
    props: {query:query}
   };
}