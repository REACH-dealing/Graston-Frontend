import { configureStore } from "@reduxjs/toolkit";
import userData from '../features/user/userSlice'

const store = configureStore({
    reducer: {
        user: userData
    }
})

export default store;