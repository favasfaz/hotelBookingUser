import React from 'react'
import {useSelector} from 'react-redux'
import FilterComponent from '../../components/FilterComponent/FilterComponent';
import Header from '../../components/Header/Header';

function index({query}) {
   let data = useSelector(state =>state.hotel)
 let filterData 
 if(query.filterBy && query.destination){
  filterData = data.hotels.filter(v =>v.category == query.filterBy && v.city.toLowerCase() == query.destination.toLowerCase())
 }else if(query.destination){
 filterData =  data.hotels.filter((v)=>v.city.toLowerCase() == query.destination.toLowerCase()) 
 }else if(query.category){
  filterData =  data.hotels.filter(v =>v.category == query.category)
 } 
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