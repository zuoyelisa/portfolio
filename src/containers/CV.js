import React, { Component } from "react";
import CvImage from "../assets/CV.png";

class CV extends Component {
  render() {
    return (
      <div className="CV">
        <img src={CvImage} />
      </div>
    );
  }
}

export default CV;
