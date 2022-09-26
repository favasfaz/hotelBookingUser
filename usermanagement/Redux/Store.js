import {configureStore} from '@reduxjs/toolkit'
import AuthReducer from './AuthSlice'
import CategoryReducer from './CategorySlice'
import HotelReducer from './HotelSlice'
const store = configureStore({
    reducer:{
       users :AuthReducer,
       category :CategoryReducer,
       hotel:HotelReducer
    }
})

export default store