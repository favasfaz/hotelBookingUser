import React,{useEffect,useState} from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { FetchCategory } from "../../Redux/CategorySlice";
import {FetchHotels} from '../../Redux/HotelSlice'
import {useRouter} from 'next/router'
import Skeleton from '@mui/material/Skeleton';

function PropertyType() {
  const [loader,setLoader]= useState(true)
  const dispatch = useDispatch();
  const router = useRouter()
  const data = useSelector((state) => state.category);
  useEffect(()=>{
    dispatch(FetchCategory());
    dispatch(FetchHotels())
  },[])
  
  const handleSelect = async(id) =>{
    router.push(`/search?category=${id}`)
  }
  return (
    <div className="md:container md:mx-auto my-4 h-70 md:h-80  bg-white drop-shadow-md">
      <div className="p-3 mt-8 text-red-600 font-mono flex font-semibold">
        <h2 className="text-2xl underline"> Browse by property type </h2>
      </div>

      <div
        className="flex px-2 md:px-3 justify-start
         whitespace-nowrap space-x-2 sm:space-x-4 overflow-x-scroll overscroll-y-none scrollbar-hide"
      >
        {
         data.categories.map((v)=>(
            <div className="w-52 cursor-pointer" onClick={()=>handleSelect(v._id)}>
              {loader && <Skeleton variant="wave" width={200} height={200} />}
          <Image
            layout="fixed"
            onLoadingComplete={()=>setLoader(false)}
            src={v.imageUrls[0]}
            className="rounded-lg"
            height="200"
            width="200"
            alt="categoryImage"
          />
          <div>{v.category}</div>
        </div>
          ))
          
        }
      </div>
    </div>
  );
}

export default PropertyType;
