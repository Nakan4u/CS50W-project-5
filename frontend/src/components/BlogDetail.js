import React from 'react';

function BlogDetail(props) {
  return (
    <article>
      <h3>{props.post.title}</h3>
      <p>{props.post.excerpt}</p>
    </article>
  );

}

export default BlogDetail;