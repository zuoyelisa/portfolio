import React, { Component } from "react";
import Carousel from "../components/Carousel";
import Recommendations from "../components/Recommendations";

class PenguinsRescueGame extends Component {
  render() {
    return (
      <div>
        <iframe
          src="https://player.vimeo.com/video/79549146"
          id="video"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        />
        <h2>BeautiFruit</h2>
        <h3>[ My role: visual design and interaction design ]</h3>
        <h4>What is it:</h4>
        <p>
          Beautifruit is a leisure mobile game. Users need to feed the girl with
          healthy fruit and avoid oily food to become pretty. The interaction is
          pretty simple—user shoots the fruit to the girl and oily food to the
          rubbish bin and avoid it crashing with the other moving fruit at the
          same time.
        </p>
        <h4>What I have learnt in this project:</h4>
        <p>
          The Beautifruit game is infact a very logical game. I created a table
          to show the relationship between different fruits and which fruit is
          good for which parts of the body.
        </p>
        <Carousel />
        <Recommendations />
      </div>
    );
  }
}

export default PenguinsRescueGame;
