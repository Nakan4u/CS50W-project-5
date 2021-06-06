import React from 'react';
import BlogDetail from "./BlogDetail";

function BlogRoll(props) {

  let postList = props.posts ?
  props.posts.map((post, index)=>{
    return <BlogDetail key={index} post={post}/>
  }) : '...';

  return <div>{postList}</div>
}

export default BlogRoll;