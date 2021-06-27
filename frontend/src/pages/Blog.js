import React, {useEffect, useState} from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { API_HOST } from '../Constants';
import Card from '../components/Card';

import BlogPost from '../components/BlogPost';

function Blog() {
  let { path } = useRouteMatch();

  const [posts, setPosts] = useState();
  const [category, setCategory] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${API_HOST}/blog/categories`)
      .then(res => res.json())
      .then(data => setCategories(data))
  }, []);

  useEffect(() => {
    let url = category
      ? `${API_HOST}/blog/category/${category}`
      : `${API_HOST}/blog`
    fetch(url)
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [category]);
  
  return(
    <main>
      <h1>Blog</h1>
        <Switch>
          <Route exact path={path}>
            <button className={!category && "button-selected"}onClick={() => setCategory(null)}>All</button>
            {categories ? categories.map((c, index) => {
              return(
                <button className={category === c.name && "button-selected"} key={index} onClick={ () => setCategory(c.name) }>
                  {c.name}
                </button>
              )
            }) : '...' }

            {posts ? posts.map((post, index) => {
              let props = {
                "key" : index,
                "title": post.title,
                "subtitle": post.category,
                "time": post.published,
                "titleLink": `/blog/post/${post.slug}`,
                "content": post.excerpt,
              }
              return(
                <Card {...props}/>
              )
            }) : '...' }
            
          </Route>
          <Route path={`${path}/post/:slug`} component={BlogPost} />       
        </Switch>
    </main>
  );
}

export default Blog;

// <Card key={index} title={post.title} time={post.published} link={`/blog/post/${post.slug}`}/>