import React from "react";
import { connect } from "react-redux";
import * as Types from "../Actions/Actions";

const DisplayPost = props => {
  const id = props.match.params.postId;
  const selctedPost = props.getSelectedPost(id);
  const handleDelete = () => {
    props.getPostDelete(id);
    props.history.push("/");
  };
  console.log(selctedPost)
  
  return (
    <div>
      <div className="fullPost">
        <span className="title">{selctedPost.title}</span>
        <h4>Category</h4>
        <p>{selctedPost.category}</p>
        <h4>Content</h4>
        <p>{selctedPost.detail}</p>
        <div className="btnGrp">
          <button
            id={id}
            onClick={() => {
              props.history.push(`/posts/${selctedPost._id}/edit`);
            }}
          >
            Edit
          </button>
          <button id={id} onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    getPostDelete: deletedId => {
      dispatch(Types.deletePost(deletedId));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DisplayPost);
