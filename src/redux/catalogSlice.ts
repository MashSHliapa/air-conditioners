import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestCatalog } from '../services/posts';
import { DataInitialState } from '../types/interfaces';

export const fetchCatalog = createAsyncThunk('catalog/fetchCatalog', async () => {
  return await requestCatalog();
});

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    data: [],
    limit: 12,
    loading: false,
    error: null,
  } as DataInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCatalog.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCatalog.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCatalog.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const catalogReducer = catalogSlice.reducer;
