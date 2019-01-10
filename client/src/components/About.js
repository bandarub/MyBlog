import React, { Component } from "react";
import { connect } from "react-redux";
import { getProfile } from "../Actions/ProfileActions";

import Loader from "./Loader";

class About extends Component {
  componentDidMount() {
    this.props.getProfile();
  }
  render() {
    const { profile } = this.props;
    const personalInfo = profile.profile[0];
    return (
      <div className="aboutApp">
        {personalInfo === undefined ? (
          <Loader />
        ) : (
          <div>
            <h4>Profile</h4>
            <p className="heading">
              Name:
              <span>{personalInfo.name}</span>
            </p>
            <p>
              Occupation:
              <span>{personalInfo.occupation}</span>
            </p>
            <p>
              Bio
              <span>{personalInfo.bio}</span>
            </p>
            <button>Feedback</button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profile
  };
};

export default connect(
  mapStateToProps,
  { getProfile }
)(About);
