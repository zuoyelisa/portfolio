import React, { Component } from "react";
import Carousel from "../components/Carousel";
import Recommendations from "../components/Recommendations";

class PrincessDiaryGame extends Component {
  render() {
    return (
      <div>
        <iframe
          src="https://player.vimeo.com/video/121224430"
          id="video"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        />
        <h2>Princess Diary Game</h2>
        <h3>[ My role: graphic design, interaction design and some coding ]</h3>
        <h4>What is it:</h4>
        <p>
          The first idea of Pricess Diary was a combination of e-book and game,
          aiming to motivate children to develop their senses. Some little girls
          imagine themselves as pricesses. Some of the small games are designed
          based on popular fairytales which help these girls to make their
          dreams come true. In order to interact with the character, little
          girls can play this game with finger gestures such as tap and shake.
          Later, I combined the idea I had with the leap motion technology. With
          the leap motion, this design can be potentially used as an
          installation in some museum. The user can help the princess to dress
          up and take some other challenges in the game.
        </p>
        <h4>What I love the most in this project:</h4>
        <p>
          This is a personal project so I was responsible for the graphic design
          and the interaction design. My favourite part in this project was
          looking for the beautiful dresses from the internet to get
          inspiration, then turned those ideas to the graphic. I had tried a lot
          of style before I decided to use this watercolor style.
        </p>
        <Carousel />
        <Recommendations />
      </div>
    );
  }
}

export default PrincessDiaryGame;
