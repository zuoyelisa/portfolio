import React, { Component } from "react";
import Carousel from "../components/Carousel";
import Recommendations from "../components/Recommendations";

class Zoo extends Component {
  render() {
    return (
      <div>
        <iframe
          src="https://player.vimeo.com/video/129438226"
          id="video"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        />
        <h2>Zoo</h2>
        <h3>[ My role: graphic design, interaction design and coding ]</h3>
        <h4>What is it:</h4>
        <p>
          Zoo is designed as a children's drawing application, which they can
          use to create their own paintings by simple gestures. It is easy to
          use: put two fingers on the screen will create an animal or plant,
          distance between the two fingers will define the type of the object.
          With this platform, users are able to create their own small forest
          and share with the others. There are also functions like undo, delect
          everything so the user don't to worry about making mistakes.
        </p>
        <h4>What I have learnt in this project:</h4>
        <p>
          This was a small workshop which lasted for a week. In another word,
          all those ideation, visual design and coding were done in a week. I
          was very happy with this product since I have learnt a new coding
          language during the course. Moreover, many students said that they got
          inspired by this product on the Demo day in our department. For
          instance, someone had the idea that Zoo could had more scenarios and
          objects, so that the bad drawers can still create their own master
          piece. I also got some new ideas for the Zoo. For example, to combind
          this tool with storytelling. It can be a great storytelling tool that
          used by families. Last but not least, what I love the most were all
          the pleasure and fun I had while working on it!
        </p>
        <Carousel />
        <Recommendations />
      </div>
    );
  }
}

export default Zoo;
