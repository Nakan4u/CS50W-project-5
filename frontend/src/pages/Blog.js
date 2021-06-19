import React, {useEffect, useState} from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { API_HOST } from '../Constants';
import Card from '../components/Card';
import BlogRoll from '../components/BlogRoll';
import BlogPost from '../components/BlogPost';

function Blog() {
  let { path } = useRouteMatch();

  return(
    <div>
      <h1>Blog</h1>
        <Switch>
          <Route exact path={path}>
            <BlogRoll />
          </Route>
          <Route path={`${path}/post/:slug`} component={BlogPost} />       
        </Switch>
    </div>
  );
}

export default Blog;