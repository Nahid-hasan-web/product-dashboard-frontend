import { createSlice } from '@reduxjs/toolkit'

export const infoSlice = createSlice({
  name: 'counter',
  initialState: {
    userInfo:JSON.parse(localStorage.getItem('userInfo')) || null,
  },
  reducers: {
    userInfoReducer: (state, action) => {
      state.userInfo = action.payload
    },
  },
})

export const {userInfoReducer } = infoSlice.actions

export default infoSlice.reducer