import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../Constants';
import BlogRoll from '../components/BlogRoll';
import BlogPost from '../components/BlogPost';

function Blog() {
  return(
    <div>
      <h1>Blog</h1>
      <BrowserRouter>
        <Switch>
          <Route path='/blog/:slug' component={BlogPost} />  
          <Route path='/blog' component={BlogRoll} />         
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Blog;