import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import '../styles/App.css';
import PostsList from '../features/posts/PostsList';
import AddPostForm from '../features/posts/AddPostForm';
import SinglePostPage from '../features/posts/SinglePostPage';
import EditPostForm from '../features/posts/EditPostForm';
import UsersList from '../features/users/UsersList';
import UserPage from '../features/users/UserPage';
import NotificationsList from '../features/notifications/NotificationsList';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <header className="topbar">
          <div className="container">
            <h1>GenZ</h1>
            <nav>
              <Link to="/">Posts</Link>
              <Link to="/users">Users</Link>
              <Link to="/notifications">Notifications</Link>
            </nav>
          </div>
        </header>
        <div className="App">
        <Switch>
          <Route exact path="/" render={() => (<><AddPostForm /><PostsList /></>)} />
          <Route path="/posts/:postId" component={SinglePostPage} />
          <Route path="/editPost/:postId" component={EditPostForm} />
          <Route exact path="/users" component={UsersList} />
          <Route path="/users/:userId" component={UserPage} />
          <Route path="/notifications" component={NotificationsList} />
        </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
