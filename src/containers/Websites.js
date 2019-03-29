import React, { Component } from "react";
import ThumbnailList from "../components/ThumbnailList";
import websites from "../json/web.json";

class Websites extends Component {
  render() {
    return <ThumbnailList content={websites} />;
  }
}

export default Websites;
