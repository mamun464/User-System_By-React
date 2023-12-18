// registrationSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

// Define the initial state
interface AuthState {
    user: any; // You might want to define a User type
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}
const initialState: AuthState = {
    user: null,
    status: 'idle',
    error: null,
};

// Create an async thunk for user registration
export const registerUser = createAsyncThunk('registration/registerUser', async (credentials: { email: string; password: string }) => {
    try {
        const response = await axios.post('https://reqres.in/api/register', credentials); // Replace with your API endpoint
        console.log("-------------->", response.data)
        localStorage.setItem('id', JSON.stringify(response.data.id));
        localStorage.setItem('user', JSON.stringify(response.data));
        toast.success(`registration Successful`);


        // return response.data;
    } catch (error) {
        toast.error(`registration Failed: ${JSON.stringify(error.response.data)}`);
        throw error.response.data;
    }
    // try {
    //     const response = await registerUserAPI(userData); // Replace with your actual API function
    //     return response.data; // Assuming the API returns data upon successful registration
    // } catch (error) {
    //     return rejectWithValue(error.response.data); // Pass the server error to the action payload
    // }
});

// Create a registration slice
const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
                state.error = null;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message as string;
            });
    },
});


export default registrationSlice.reducer;
