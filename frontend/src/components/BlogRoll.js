import React, {useEffect, useState} from 'react';

import { API_HOST } from '../Constants';

import BlogPostDetail from "./BlogPostDetail";

function BlogRoll() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch(`${API_HOST}/blog/`)
      .then((response) => response.json())
      .then((data) => setPosts(data))
  }, []);

  let postList = posts ?
  posts.map((post, index)=>{
    return <BlogPostDetail key={index} post={post}/>
  }) : '...';
 
  return (
    <div>
      {postList}
    </div>
    );
}

export default BlogRoll;