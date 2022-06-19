import React from 'react';
import { Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import Profile from '../pages/Profile';
import NewPost from '../pages/NewPost';
import PostImages from '../pages/PostImages';
import Animals from '../pages/Animals';
import EditPost from '../pages/EditPost';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/forgot" component={ForgotPassword} />
    <Route path="/password/reset" component={ResetPassword} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/new-post" component={NewPost} isPrivate />
    <Route path="/post-images" component={PostImages} isPrivate />
    <Route path="/animals" component={Animals} isPrivate />
    <Route path="/profile" component={Profile} isPrivate />
    <Route path="/posts/:id" component={EditPost} isPrivate />
  </Switch>
);

export default Routes;
