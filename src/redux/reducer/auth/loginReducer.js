import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogin: false,
    loading: false,
    error: null,
};

const loginSlice = createSlice({
    name: "loginStatus",
    initialState,
    reducers: {
        postLogin: (state,action) => {
            state.isLogin = action.payload;
            state.loading = true;
            state.error = null;
        }
    }
});

export const { postLogin } = loginSlice.actions;
export default loginSlice.reducer;