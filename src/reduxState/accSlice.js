import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  whoIsLogin: null,
  account: [
    {
      id: 1,
      email: 'admin@gmail.com',
      password: 'admin',
      firstName: 'admin',
      lastName: 'admin',
      gender: 'male',
    },
    {
      id: 2,
      email: 'admin1@gmail.com',
      password: 'admin1',
      firstName: 'admin1',
      lastName: 'admin1',
      gender: 'male',
    },
    {
      id: 3,
      email: 'admin2@gmail.com',
      password: 'admin2',
      firstName: 'admin2',
      lastName: 'admin2',
      gender: 'male',
    },
  ],
  hotelList: [],
  bookHistory: []
};

const accSlice = createSlice({
    name: 'acc',
    initialState,
    reducers: {
        updateProfile: {
            reducer(state, action){
                console.log(action.payload);
            }
        },
        checkLogin: {
            reducer(state, action){
                console.log(action.payload.email, action.payload.password);
                let tesLogin = state.account.find((obj) => obj.email === action.payload.email && obj.password === action.payload.password)
                if(tesLogin===undefined){
                    console.log("akun tidak ada");
                    
                }else{
                    console.log("login berhasil");
                    console.log(tesLogin);
                    state.isLogin = true
                    const searchIndex = state.account.findIndex((obj) => obj.email==action.payload.email);
                    state.whoIsLogin = searchIndex
                    console.log(searchIndex);
                }
                // console.log(tesLogin);
            }
        }
    }
})

export const {updateProfile, checkLogin} = accSlice.actions;
export default accSlice.reducer;