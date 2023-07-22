import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://randomuser.me/api/';

const initialState = {
  user: [
    {
      id: 1,
      name: 'John doe',
    }
  ],
  isLoading: false, // true || false
  error: undefined,
};

export const fetchUser = createAsyncThunk('users/fetchUser', async () => {
  try {
    const response = await axios.get(url);
    const data = response.data.results[1];
    const user = {
      id: data.login.uuid,
      name: `${data.name.first} ${data.name.last}`,
    };
    return user;
  }
  catch (error) {
    return error;
  }
}
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    creator: (state, action) => {
      const newUser = action.payload;
      state.user.push(newUser);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.isLoading = true;
      }
      )
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { creator } = usersSlice.actions;

export default usersSlice.reducer;