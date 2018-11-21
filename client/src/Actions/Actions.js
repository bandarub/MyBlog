import axios from "axios";
import {
  GET_POST,
  SAVE_POST,
  DELETE_POST,
  POSTS_LOADING,
  SINGLE_POST
} from "./types";

export const getPosts = () => dispatch => {
  dispatch(setPostsLoading());
  axios.get("api/posts").then(res => {
    dispatch({
      type: GET_POST,
      payload: res.data
    });
  });
};

export const savePost = student => dispatch => {
  const newPost = {
    _id: student.id,
    title: student.title,
    category: student.category,
    detail: student.detail
  };
  if (student.action === "add") {
    axios.post("/api/posts", student).then(res => {
      dispatch({
        type: SAVE_POST,
        payload: res.data,
        action: student.action
      });
    });
  } else if (student.action === "edit") {
    axios.put(`/api/posts/${student.id}/edit`, newPost).then(res => {
      console.log(res);
      dispatch({
        type: SAVE_POST,
        payload: newPost,
        action: student.action
      });
    });
  }
};

export const deletePost = deletedId => dispatch => {
  console.log(deletedId);
  axios.delete(`api/posts/${deletedId}`).then(res => {
    dispatch({
      type: DELETE_POST,
      payload: deletedId
    });
  });
};
export const setPostsLoading = () => {
  return {
    type: POSTS_LOADING
  };
};
