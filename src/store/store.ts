import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    isLoading: true,
    isError: true,
  },
  reducers: {
    setProducts: (state, action: PayloadAction<any>) => {
      state.products = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
    },
  },
});

export const { setProducts, setLoading, setError } = productsSlice.actions;

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});
