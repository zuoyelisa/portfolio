import React, { Component } from "react";
import ThumbnailList from "../components/ThumbnailList";
import applications from "../json/app.json";

class Applications extends Component {
  render() {
    return <ThumbnailList content={applications} />;
  }
}

export default Applications;
