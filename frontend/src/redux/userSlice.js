import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: localStorage.getItem('token'),
    name: '',
    email:"",

  },
  reducers: {
    setToken:(state, action)=>{
        state.token = action.payload;
    },
    setUserDetails:(state, action)=>{
        state.email = action.payload.email;
        state.name = action.payload.name;
    }
  },
});

export const { setToken, setUserDetails } = userSlice.actions;

export default userSlice.reducer;
