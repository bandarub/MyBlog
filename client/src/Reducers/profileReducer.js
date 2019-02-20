import { GET_PROFILE } from "../Actions/types";

const initState = {
  profile: [],
  loading: false
};

export default function(state = initState, action) {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
