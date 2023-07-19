import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    name: 'Anita Sharma',
    isLoading: false,
    error: undefined,
  },
  {
    id: 2,
    name: 'Rajendra Upadhyay',
    isLoading: false,
    error: undefined,
  },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const newBookItem = action.payload;
      state.push(newBookItem);
    },
  },
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;