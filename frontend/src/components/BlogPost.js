import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { API_HOST } from "../Constants.js";

function BlogPost() {
  let { slug } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch(`${API_HOST}/blog/${slug}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
  }, []);

  return (
    <article>
      <h3>{post.title}</h3>
      <sub>{post.excerpt}</sub>
      <p>{post.content}</p>
      <Link to="/blog">Return to all posts</Link>
    </article>
  );
}

export default BlogPost
