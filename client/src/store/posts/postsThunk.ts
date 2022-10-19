import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPosts } from '../../util/api';

export const fetchPostsThunk = createAsyncThunk('posts/fetch', () => {
  console.log('inside fetchPostsThunk');
  return getPosts();
});