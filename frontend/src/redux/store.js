import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    usre: userReducer, // Add your reducers here
  },
});

export default store;
