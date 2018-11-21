import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Loader from "./Loader";
import Checkbox from "./checkbox";
import PostIndex from "./PostIndex";
import { connect } from "react-redux";
import { getPosts } from "../Actions/Actions";
import PropTypes from "prop-types";

// import Navigation from "./Navigation";

class Home extends Component {
  state = {
    searchValue: "",
    filter: []
  };
  handleSearch = e => {
    this.setState({ searchValue: e.target.value });
  };
  handleCheckbox = (e, cate = "") => {
    console.log(e.target.value);
    let copy_filter = [...this.state.filter];
    !cate
      ? copy_filter.includes(e.target.value)
        ? copy_filter.splice(copy_filter.indexOf(e.target.value), 1)
        : copy_filter.push(e.target.value)
      : copy_filter.includes(cate)
      ? copy_filter.splice(copy_filter.indexOf(cate), 1)
      : copy_filter.push(cate);
    this.setState({ filter: copy_filter });
  };
  filterPosts = posts => {
    let { filter } = this.state;
    const locked = posts;
    console.log(filter)
    for (let item of filter) {
      if (item === filter[0])
        posts = [...locked.filter(post => post.category === item)];
      if (item !== filter[0])
        posts = [...posts, ...locked.filter(post => post.category === item)];
    }
    return posts;
  };
  render() {
    let posts = this.props.posts.filter(post =>
      post.category.toLowerCase().includes(this.state.searchValue)
    );
    posts = this.filterPosts(posts);
    let { filter } = this.state;
    const categories = [
      { id: "culture", name: "category", label: "Culture" },
      { id: "Sports", name: "category", label: "Sports" },
      { id: "refreshment", name: "category", label: "Refreshment" },
      { id: "work", name: "category", label: "Work" }
    ];
    if (posts.length === 0)
      return (
        <div>
          <Loader />
          <h3>No posts fetched</h3>
        </div>
      );
    else
      return (
        <div className="home">
          <input
            className="search"
            type="text"
            placeholder="Search Category"
            onChange={this.handleSearch}
          />
          <ul id="filter-btn">
            {categories.map((item, i) => (
              <Checkbox
                key={i}
                id={item.id}
                name={item.name}
                label={item.label}
                checked={filter.includes(item.id)}
                onChange={this.handleCheckbox}
              />
            ))}
          </ul>
          <div className="postSummery">
            {posts.map(post => (
              <PostIndex
                key={post.id}
                post={post}
                history={this.props.history}
              />
            ))}
          </div>
        </div>
      );
  }
}

Home.propTypes = {
  getPosts: PropTypes.func.isRequired
};

export default connect(
  null,
  { getPosts }
)(Home);
