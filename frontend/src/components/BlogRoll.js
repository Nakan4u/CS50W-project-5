import React, {useEffect, useState} from 'react';
import { API_HOST } from '../Constants';

import BlogPostDetail from "./BlogPostDetail";

function BlogRoll() {
  const [posts, setPosts] = useState();
  const [category, setCategory] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${API_HOST}/blog/categories`)
      .then(res => res.json())
      .then(data => setCategories(data))
  }, []);

  useEffect(() => {
    let url = category ? `${API_HOST}/blog/category/${category}` : `${API_HOST}/blog/`
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPosts(data))
  }, [category]);

  let categoryList = categories ?
  categories.map((c, index)=>{
    return (
    <button key={index} onClick={ () => setCategory(c.name) }>
      {c.name}
    </button>
  )}) : '...';

  let postList = posts ?
  posts.map((post, index)=>{
    return <BlogPostDetail key={index} post={post}/>
  }) : '...';
 
  return (
    <div>
      <button onClick={() => setCategory(null)}>All</button>
      {categoryList}
      <ul style={{listStyle: "none"}}>
        {postList}
      </ul>
    </div>
    );
}

export default BlogRoll;