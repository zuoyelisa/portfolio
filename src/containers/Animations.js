import React, { Component } from "react";
import ThumbnailList from "../components/ThumbnailList";
import animation from "../json/animation.json";

class Animations extends Component {
  render() {
    return <ThumbnailList content={animation} />;
  }
}

export default Animations;
