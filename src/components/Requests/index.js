import { configureStore } from '@reduxjs/toolkit'
import appSlice from './app';
import profileSlice from './profile';
import histograms  from './histograms';

export default configureStore({
  reducer: {
    app:appSlice,
    profile:profileSlice,
    histograms
  }
})
