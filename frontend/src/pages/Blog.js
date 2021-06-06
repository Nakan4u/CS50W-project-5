import React, { useState, useEffect } from 'react';
import '../Constants';
import { API_HOST } from '../Constants';
import BlogRoll from '../components/BlogRoll';

function Blog() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch(`${API_HOST}/blog/`)
      .then((response) => response.json())
      .then((data) => setPosts(data))
  }, []);

  return(
    <div>
      <h1>Blog</h1>
      <BlogRoll posts={posts} />
    </div>
  );
}

export default Blog;