import { createSlice } from '@reduxjs/toolkit'

export const songSlice = createSlice({
  name: 'song',
  initialState: {
    value: 0
  },
  reducers: {
  }
})

export const {  } = songSlice.actions

export default songSlice.reducer
