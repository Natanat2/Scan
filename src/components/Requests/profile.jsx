import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from "./axiosInstance";

export const loginFetch = async (data) => {
    const response = await axiosInstance.post('account/login', data);
    return response
}

export const profileFetch = async () => {
    const response = await axiosInstance.get('account/info');
    return response
}

export const getCompanyInfo = createAsyncThunk(
    'getCompanyInfo',
    async () => {
        const data = await profileFetch()        
        return data
    }
)
export const signIn = createAsyncThunk(
    'signIn',
    async (data, thunk) => {
        const profResponse = await loginFetch(data)
        localStorage.setItem('accessToken', profResponse.accessToken)
        thunk.dispatch(getCompanyInfo())
        return profResponse
    }
)
export const profile = createSlice({
    name: 'profile',
    initialState: {
        companyInfo: null,
        accountInfo: null,
        status: ''
    },
    reducers: {
        signOut: (state) => {
            state.accountInfo = null;
            state.companyInfo = null;
            localStorage.removeItem('accessToken');       
        },
        dropStatus: (state) => {
            state.status = ''
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(signIn.pending, (state)=>{
            state.status = 'pending'
        })
        .addCase(signIn.fulfilled, (state, action)=> {
            state.accountInfo=action.payload;
            state.status = 'done';
        })
        .addCase(getCompanyInfo.pending, (state)=>{
            state.status = 'pending'
        })
        .addCase(getCompanyInfo.fulfilled, (state, action)=> {
            state.companyInfo=action.payload;
            state.status = 'done';
        })
        .addCase(signIn.rejected, (state)=>{
            state.status = 'error'
        })
    }
  })
  
  export const {signOut, dropStatus} = profile.actions
  export default profile.reducer
