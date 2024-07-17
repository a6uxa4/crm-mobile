
  import {createSlice} from '@reduxjs/toolkit';
  
  const initialState: any = {
    product: 'Все товары',
  };
  
  export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setProduct: (state, action) => {
        state.product = action.payload
      }
    },
  });
  
  export const authActions = authSlice.actions;
  export const authReducer = authSlice.reducer;
  