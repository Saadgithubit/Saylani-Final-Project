import { createSlice } from '@reduxjs/toolkit'

const drawerWidth = createSlice({
  name: 'width',
  initialState: {
    width: null
  },
  reducers: {
    setWidth: (state, data) => {
      state.width = data.payload
    },
  }
})

export const { setWidth } = drawerWidth.actions

export default drawerWidth