import { createSlice } from '@reduxjs/toolkit';
import { registerRequest, loginRequest } from '../operations/operations';

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
        state.userData = action.payload;
      })
      .addCase(registerRequest.rejected, rejectHandler)

      .addCase(loginRequest.pending, pendingHandler)
      .addCase(loginRequest.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.isLoggedIn = true;
        state.userData = action.payload;
      })
      .addCase(loginRequest.rejected, rejectHandler),
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
