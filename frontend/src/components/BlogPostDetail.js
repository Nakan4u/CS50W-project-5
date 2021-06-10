import React from 'react';
import { Link } from 'react-router-dom';

function BlogPostDetail(props) {
  return (
    <Link to={`/blog/${props.post.slug}`}>
      <h3>{props.post.title}</h3>
      <sub>{props.post.published}</sub>
      <p>{props.post.excerpt}</p>
    </Link>
  );

}

export default BlogPostDetail;