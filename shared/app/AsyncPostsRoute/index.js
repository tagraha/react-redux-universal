import React from 'react';
import { Link, Route } from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import AnimatedSwitch from '../AnimatedSwitch';
import Post from './Post';

const AsyncPostsRoute = () => (
  <div>
    <ul>
      <li><Link to="/posts/1">Post 1</Link></li>
      <li><Link to="/posts/2">Post 2</Link></li>
    </ul>

    <hr />

    <Route
      render={({ location }) => (
        <TransitionGroup component="main">
          <AnimatedSwitch key={location.key} location={location}>
            <Route path="/posts/:id" component={Post} />
          </AnimatedSwitch>
        </TransitionGroup>
      )}
    />
  </div>
);

export default AsyncPostsRoute;
