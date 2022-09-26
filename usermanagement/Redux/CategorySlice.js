import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {AllCategories} from '../APIs/Index'

const initialState = {
    loading:false,
    categories :[],
    error:''
}

export const FetchCategory = createAsyncThunk('category/FetchCategory',async()=>{
    const data = await AllCategories()
return data.data
})

const categorySlice = createSlice({
    name:'category',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(FetchCategory.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(FetchCategory.fulfilled,(state,action)=>{
            state.loading = false
            state.categories = action.payload
            state.error = ''
        })
        builder.addCase(FetchCategory.rejected,(state,action)=>{
            state.loading = false
            state.categories = []
            state.error = action.payload
        })
    }
})
export default categorySlice.reducer