import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null
  },
  reducers: {
    setUser: (state, data) => {
      state.user = data.payload
    },
    removeUser: (state, data) => {
      state.user = null
    },
  }
})

export const { setUser, removeUser } = userSlice.actions;

export default userSlice;