import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { userLogin } from '../APIs/Index'


const initialState = {
    loading : false,
    user :{},
    error:''
  }

  export const LoginUser = createAsyncThunk('users/LoginUser',async(data,{ rejectWithValue })=>{
   try {
    const user =  await userLogin(data)
    return user.data
   } catch (error) {  
   throw  rejectWithValue(error.response.data.message)
   }
})

  export const AuthSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers :(builder) =>{
        builder.addCase(LoginUser.pending,(state)=>{
            state.loading =true
        })
        builder.addCase(LoginUser.fulfilled,(state,action)=>{
            state.loading = false
            state.user = action.payload
            state.error = ''
        })
        builder.addCase(LoginUser.rejected,(state,action)=>{
            state.loading=false
            state.user = []
            state.error = action.payload
        })
    }
  })
  
  
  export default AuthSlice.reducer