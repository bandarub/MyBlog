import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Home from "./Homepage";
import DisplayPost from "./DisplayPost";
import Profile from "./Profile";
import About from "./About";
import Navigation from "./Navigation";
import Form from "./Form";

const Routing = props => {
  const getSelectedPost = id => {
    const { posts } = props.posts;
    let foundPost;
    for (let post of posts) {
      if (post._id === id) {
        foundPost = post;
      }
    }
    return foundPost;
  };
  const { posts } = props;
  console.log(props);
  return (
    <div>
      <HashRouter>
        <div>
          <Navigation />
          <Route
            exact
            path="/"
            render={props => <Home {...props} {...posts} />}
          />
          <Route
            exact
            path="/newpost"
            render={props => (
              <Form
                {...props}
                {...posts}
                action="add"
                getSelectedPost={getSelectedPost}
              />
            )}
          />
          <Route
            exact
            path="/posts/:postId"
            render={props => (
              <DisplayPost
                {...props}
                {...posts}
                action="add"
                getSelectedPost={getSelectedPost}
              />
            )}
          />
          <Route
            exact
            path="/posts/:postId/edit"
            render={props => (
              <Form
                action="edit"
                {...props}
                {...posts}
                getSelectedPost={getSelectedPost}
              />
            )}
          />
          <Route
            exact
            path="/profile"
            render={props => (
              <Profile
                {...props}
                {...posts}
                getSelectedPost={getSelectedPost}
              />
            )}
          />
          <Route
            exact
            path="/aboutApp"
            component = {About}
            
          
          />
        </div>
      </HashRouter>
    </div>
  );
};

export default Routing;
