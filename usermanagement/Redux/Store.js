import {configureStore} from '@reduxjs/toolkit'
import AuthReducer from './AuthSlice'
import CategoryReducer from './CategorySlice'
import HotelReducer from './HotelSlice'
import RoomReducer from './RoomRedux'
const store = configureStore({
    reducer:{
       users :AuthReducer,
       category :CategoryReducer,
       hotel:HotelReducer,
       rooms:RoomReducer,
    }
})

export default store