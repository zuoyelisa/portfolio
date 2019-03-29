import React, { Component } from "react";
import ThumbnailList from "../components/ThumbnailList";
import otherworks from "../json/otherworks.json";

class Otherworks extends Component {
  render() {
    return <ThumbnailList content={otherworks} />;
  }
}

export default Otherworks;
