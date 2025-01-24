import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from "./axiosInstance";

import { objectSearchToSummary } from './ObjectSearch';
import { returnIdsArray } from './Array';

export const histogramsFetch = async (data) => {
    const response = await axiosInstance.post('objectsearch/histograms', data);
    return response
}

export const publicationFetch = async (data) => {
    const response = await axiosInstance.post('objectsearch', data);
    return response
}

export const documentsFetch = async (data) => {
    const response = await axiosInstance.post('documents', data);
    return response
}

export const getHistogramInfo = createAsyncThunk(
    'getHistogramInfo',
    async (body) => {
        const data = await histogramsFetch(body);
        return objectSearchToSummary(data.data);
    }
)
export const getPublication = createAsyncThunk(
    'getPublication',
    async (body) => {
        const data = await publicationFetch(body);
        return returnIdsArray(data);
    }
)
export const getDocuments = createAsyncThunk(
    'getDocuments',
    async (body) => {
        const data = await documentsFetch(body);
        return data
    }
)
export const histogramSlice = createSlice({
    name: 'histogram',
    initialState: {
        histogramInfo: null,
        status:'',
        publicationIds: [],
        documents: [],
    },
    reducers: {
        dropDocumentsInfo: (state) => {
            state.publicationIds = [];
            state.documents = [];
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getHistogramInfo.pending, (state)=>{
            state.status = 'pending'
        })
        .addCase(getHistogramInfo.fulfilled, (state, action)=> {
            state.histogramInfo=action.payload;
            state.documents = [];
            state.status = 'done';
        })
        .addCase(getHistogramInfo.rejected, (state) => {
            state.status = 'error';
        })
        .addCase(getPublication.fulfilled, (state, action)=> {
            state.publicationIds = action.payload;
        })
        .addCase(getDocuments.fulfilled, (state, action)=>{
            state.documents = [...state.documents, ...action.payload];
        })
    }
}) 
export const {dropDocumentsInfo} = histogramSlice.actions
export default histogramSlice.reducer
