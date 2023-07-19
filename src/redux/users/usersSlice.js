import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    isLoading: false,
    error: undefined,
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getUsers: (state) => {
            state.isLoading = true;
        }
    },
    extraReducers: {},
});

export const { getUsers } = usersSlice.actions;

export default usersSlice.reducer;