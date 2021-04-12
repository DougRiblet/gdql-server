import { configureStore } from '@reduxjs/toolkit'
import songReducer from '../SongSlice'

export default configureStore({
  reducer: {
    song: songReducer
  }
});
