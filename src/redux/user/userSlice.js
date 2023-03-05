import { createSlice } from '@reduxjs/toolkit';
import {
  registerRequest,
  loginRequest,
  logOutRequest,
  getCurrentUserRequest,
} from './userOperations';

const initialState = {
  userData: {
    name: null,
    email: null,
  },
  isLoggedIn: false,
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: builder =>
    builder

      .addCase(registerRequest.pending, pendingHandler)
      .addCase(registerRequest.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.isLoggedIn = true;
        state.userData.name = action.payload.user.name;
        state.userData.email = action.payload.user.email;
      })
      .addCase(registerRequest.rejected, rejectHandler)

      .addCase(loginRequest.pending, pendingHandler)
      .addCase(loginRequest.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.isLoggedIn = true;
        state.userData.name = action.payload.user.name;
        state.userData.email = action.payload.user.email;
      })
      .addCase(loginRequest.rejected, rejectHandler)

      .addCase(logOutRequest.pending, pendingHandler)
      .addCase(logOutRequest.fulfilled, state => {
        state.status = 'resolved';
        state.isLoggedIn = false;
        state.userData.name = null;
        state.userData.email = null;
      })
      .addCase(logOutRequest.rejected, rejectHandler)

      .addCase(getCurrentUserRequest.pending, pendingHandler)
      .addCase(getCurrentUserRequest.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.isLoggedIn = true;
        state.userData.name = action.payload.name;
        state.userData.email = action.payload.email;
      })
      .addCase(getCurrentUserRequest.rejected, rejectHandler),
});

function pendingHandler(state) {
  state.error = null;
  state.status = 'pending';
}
function rejectHandler(state, action) {
  state.error = action.payload;
  state.status = 'rejected';
}

export const userReducer = userSlice.reducer;
