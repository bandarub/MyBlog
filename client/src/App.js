import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "./Actions/Actions";
import { getProfile } from "./Actions/ProfileActions";
import Routing from "./components/Links";
import Footer from "./components/Footer";

import "./styles/styles.scss";
import Loader from "./components/Loader";
import Navigation from "./components/Navigation";

class App extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    const { posts } = this.props.posts;
    return (
      <div className="App">
        {posts.length === 0 ? (
          <Loader />
        ) : (
          <div>
            <Routing posts={posts} />
            <Footer />
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    posts: state
  };
};

export default connect(
  mapStateToProps,
  { getPosts}
)(App);
