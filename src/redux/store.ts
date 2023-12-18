// store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import registrationReducer from './registrationSlice'; // Import the registration slice

const store = configureStore({
    reducer: {

        registration: registrationReducer, // Add the registration slice
        auth: authReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
