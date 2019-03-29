import React, { Component } from "react";
import { Link } from "react-router-dom";

class ThumbnailSingle extends Component {
  render() {
    return (
      <div class="thumbnail">
        <Link to={this.props.url}>
          <img src={`${match.url}/${this.props.image}`} />
          <p>{this.props.name}</p>
        </Link>
      </div>
    );
  }
}

export default ThumbnailSingle;
