import axios from "axios";
import {GET_PROFILE, PROFILE_LOADING} from "./types";


export const getProfile = () => dispatch => {
  dispatch(profileLoading());
    axios.get("/api/profile").then(res => {
     dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
    });
  };

  export const profileLoading = () => {
    return {
      type: PROFILE_LOADING
    };
  };