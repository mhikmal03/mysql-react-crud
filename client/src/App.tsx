import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';
import { fetchPostsThunk } from './store/posts/postsThunk';
import { setLoading } from './store/posts/postSlice';

function App() {

  const dispatch = useDispatch<AppDispatch>();
  const postsSlice = useSelector((state: RootState) => state.posts)

  return (
    <div className="App">
      <div>

        <h1>Posts</h1>
        <button
          onClick={() => {
            dispatch(setLoading(false))
            dispatch(fetchPostsThunk())
            
          }}
        >
          Fetch Posts
        </button>
        {postsSlice.loading && (
          <div>
            <span>Loading Posts....</span>
          </div>
        )}
        {postsSlice.posts.map((post) => (
          <div key={post.id}>
            <div>{post.title}</div>
            <div>{post.id}</div>
          </div>
        ))}
      </div>
    </div>

  );
}

export default App;
