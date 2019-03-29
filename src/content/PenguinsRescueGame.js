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
        <h2>Penguins Rescue Game</h2>
        <h3>
          [ My role: visual design, interaction design and project management ]
        </h3>
        <h4>What is it:</h4>
        <p>
          Penguin Rescue is a casual game on iOS platform. The game tells a
          story about a penguin got frozen in the ice age and it looks for help
          from the users. In this game, the users use one finger to control the
          penguin movement and try to get as much stars as possible. Most
          importantly, try to help the penguin getting into the hot spring in
          the each level.
        </p>
        <h4>What I love the most in this project:</h4>
        <p>
          Penguin rescue game was a course project. In fact, before the course
          started, we had no idea about gaming and app. However, it is still one
          of my favourite project since our team was working really hard and we
          put all our effort in this game to make it happen. After this project,
          I learnt how to cooperate with engineers and how to design a game from
          scratch. We seperated our team into four parts: level design, visual
          design, interaction design and production. The whole team cooperated
          well and we got a great final presentation for the course.
        </p>
        <Carousel />
        <Recommendations />
      </div>
    );
  }
}

export default PenguinsRescueGame;
