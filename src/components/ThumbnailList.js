import React, { Component } from "react";
import ThumbnailSingle from "./ThumbnailSingle";

class ThumbnailList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="thumbnail-wrapper">
        {this.props.content.map(item => (
          <ThumbnailSingle
            key={item.url}
            name={item.name}
            image={item.image}
            url={item.url}
          />
        ))}
      </div>
    );
  }
}

export default ThumbnailList;
