import React, { Component } from "react";
import Carousel from "../components/Carousel";
import Recommendations from "../components/Recommendations";

class NeoSmartHealth extends Component {
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
        <h2>Neosmart Health Project</h2>
        <h3>[ My role: UI/UX designer ]</h3>
        <h4>What is it:</h4>
        <p>
          Neosmart Health (NSH) is a technology start-up operating in preventive
          healthcare business. Different from the traditional health care,
          Neosmart uses self assement data, selected medical and environmental
          analysis, and genetic data to create personalized recommendations and
          a plan to improve client's health. This project aims at providing
          Neosmart Health's customers a digital service with a consistent
          customer experience. Started from scratch, we’ve designed and launched
          an website for explaining the service and functioning as the online
          portal. The portal serves as an easy booking system to make a smooth
          online-offline experience and a dashboard to monitor visuallized
          health data.
        </p>
        <Carousel />
        <Recommendations />
      </div>
    );
  }
}

export default NeoSmartHealth;
