import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import {FetchAllRooms} from '../APIs/Index'
const initialState = {
    loading : false,
    rooms : [],
    error : ''
}

export const FetchRooms = createAsyncThunk('rooms/FetchRooms',async()=>{
    console.log('rroms');
    const res = await FetchAllRooms()
    return res.data 
 })

 const roomSlice = createSlice({
    name:'rooms',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(FetchRooms.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(FetchRooms.fulfilled,(state,action)=>{
            state.loading = false
            state.rooms = action.payload
            state.error = ''
        })
        builder.addCase(FetchRooms.rejected,(state,action)=>{
            state.loading = false
            state.rooms = []
            state.error = action.payload
        })
    }
})

export default roomSlice.reducer
