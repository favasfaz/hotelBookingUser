import {configureStore} from '@reduxjs/toolkit'
import AuthReducer from './AuthSlice'

const store = configureStore({
    reducer:{
       users :AuthReducer
    }
})

export default store