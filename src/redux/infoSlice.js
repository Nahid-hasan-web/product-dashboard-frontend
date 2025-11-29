import { createSlice } from '@reduxjs/toolkit'

export const infoSlice = createSlice({
  name: 'counter',
  initialState: {
    userInfo: 0,
  },
  reducers: {
    userInfoReducer: (state, action) => {
      state.value = action.payload
    },
  },
})

export const {userInfoReducer } = infoSlice.actions

export default infoSlice.reducer