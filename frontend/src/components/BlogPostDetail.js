import React from 'react';
import { Link } from 'react-router-dom';

function BlogPostDetail(props) {
  return (
    <li>
      <Link to={`/blog/${props.post.slug}`}>
        <h3>{props.post.title}</h3>
      </Link>
      <sub>{props.post.published}</sub>
      <p>{props.post.excerpt}</p>
    </li>
  );

}

export default BlogPostDetail;