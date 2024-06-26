import { createSlice} from '@reduxjs/toolkit'

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
      theme: 'White'
    },
    reducers: {
      setTheme: (state ,data) => {
        state.theme = data.payload
      },
    }
  })
  
  export const { setTheme } = themeSlice.actions

  export default themeSlice