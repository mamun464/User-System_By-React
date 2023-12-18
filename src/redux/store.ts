// store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import registrationReducer from './registrationSlice'; // Import the registration slice
import { userApi } from './userApi';

const store = configureStore({
    reducer: {
        registration: registrationReducer,
        auth: authReducer,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware),
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
