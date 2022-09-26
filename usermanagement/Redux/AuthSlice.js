import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { userLogin } from '../APIs/Index'
import { setCookie } from "cookies-next";
import {profileEdit} from '../APIs/Index'


const initialState = {
    loading : false,
    user :{},
    error:''
  }

  export const LoginUser = createAsyncThunk('users/LoginUser',async(data,{ rejectWithValue })=>{
   try {
    const user =  await userLogin(data)
    setCookie("cookieToken",user.data.Tokens.token);
    return user.data.user
   } catch (error) {  
   throw  rejectWithValue(error.response.data.message)
   }
})
export const UpdateUserProfile = createAsyncThunk('users/UpdateUserProfile',async(data,{ rejectWithValue })=>{
    try {
     const user =  await profileEdit(data)
     return user.data
    } catch (error) {  
    throw  rejectWithValue(error.response.data.message)
    }
 })

    const AuthSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        GoogleLogin: (state, action) => {
         state.user = action.payload
        },
      },
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
            state.user = {}
            state.error = action.payload
        })
        builder.addCase(UpdateUserProfile.pending,(state)=>{
            state.loading =true
        })
        builder.addCase(UpdateUserProfile.fulfilled,(state,action)=>{
            state.loading = false
            state.user = action.payload
            state.error = ''
        })
        builder.addCase(UpdateUserProfile.rejected,(state,action)=>{
            state.loading=false
            state.user = {}
            state.error = action.payload
        })
    }
  })
  
  export const { GoogleLogin } = AuthSlice.actions;
  export default AuthSlice.reducer