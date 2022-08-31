import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/User.slice'

export default configureStore({
    reducer: {
        userSlice
    }
})