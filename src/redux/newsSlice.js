import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '8c50130aefff415c9b92028e185243c9';
const BASE_URL = 'https://newsapi.org/v2/top-headlines';

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async ({ category, page }) => {
    const response = await axios.get(BASE_URL, {
      params: {
        category,
        page,
        apiKey: API_KEY,
        pageSize: 10,
      },
    });
    return response.data;
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    loading: false,
    error: null,
    currentPage: 1,
    totalPages: 1,
    category: 'business',
  },
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
      state.currentPage = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload.articles;
        state.totalPages = Math.ceil(action.payload.totalResults / 10);
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setPage, setCategory } = newsSlice.actions;

export default newsSlice.reducer;

