// authSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BASE_URL from '../../public/config';

export const isLoggedIn = () => {
    let data = localStorage.getItem("user");
    if (data != null) return true;
    else return false;
}
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

export const loginUser = createAsyncThunk('auth/loginUser', async (credentials: { phone_no: string; password: string }) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/user/login/`, credentials); // Replace with your API endpoint

        localStorage.setItem('user', JSON.stringify(response.data));



        // return response.data;
    } catch (error) {
        toast.error(`Login Failed: ${error.response.data.message}`);
        throw error.response.data;
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message as string;
            });
    },
});

export default authSlice.reducer;
