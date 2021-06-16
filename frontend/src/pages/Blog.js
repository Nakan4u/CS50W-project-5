import { Route, Switch, useRouteMatch } from 'react-router-dom';

import '../Constants';
import BlogRoll from '../components/BlogRoll';
import BlogPost from '../components/BlogPost';

function Blog() {
  let { path } = useRouteMatch();

  return(
    <div>
      <h1>Blog</h1>
        <Switch>
          <Route exact path={path} component={BlogRoll} />  
          <Route path={`${path}/post/:slug`} component={BlogPost} />       
        </Switch>
    </div>
  );
}

export default Blog;