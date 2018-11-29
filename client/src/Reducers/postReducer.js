import {
  GET_POST,
  SAVE_POST,
  DELETE_POST,
  POSTS_LOADING,
} from "../Actions/types";

const initState = {
  posts: [],
  loading: false
};

export default function(state = initState, action) {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case SAVE_POST:
      if (action.action === "add") {
        return { posts: [action.payload, ...state.posts] };
      } else if (action.action === "edit") {
        const updatedPost = state.posts.map(post => {
          if (post._id === action.payload._id) {
            return {
              ...post,
              title: action.payload.title,
              category: action.payload.category,
              detail: action.payload.detail
            };
          } else return post;
        });
        return {posts:updatedPost};
      }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => {
          return post._id !== action.payload;
        })
      };
    default:
      return state;
  }
}
