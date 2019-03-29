import React, { Component } from "react";
import Carousel from "../components/Carousel";
import Recommendations from "../components/Recommendations";

class FlurryLiveApp extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <h2>Flurry Live App</h2>
        <p>
          Flurry is a new live video community where you can meet new people,
          hang out with friends and interact with your favorite social media
          stars. Tune in live and chat using our emojis and personalized
          stickers. Purchase virtual gifts (fireworks, balloons, pizza) for your
          friends and favorite stars. In order to enhance users' experience in
          our App, we have been working on different small cases and the App
          updates every two weeks. Our team consists of 14 people. Two of us are
          designers. All the design works got a lot of support from my
          supervisor Ron and the engineer team.
        </p>
        <h2>Case 1: Private Message</h2>
        <h3>[ My role: user flow, interactive demo and visual design ]</h3>
        <p>
          The first big case I got was to create a private message system based
          on the current design.
        </p>
        <h4>Why we needed this design:</h4>
        <p>
          The previous design we had only allow users to chat in public
          broadcast. During the public chat, we noticed that the users exchange
          their other chatting application accounts e.g. snapchat or messenger.
          The idea of private messaging is that users will be able to talk with
          the other users once they follow each other. In this case, we
          encourage users to build relationships inside our app. Therefore, it
          helps to get more returning users.
        </p>
        <h4>Design requirements:</h4>
        <p>
          1. The current screen is already quite crowded. How to integrate
          private message function in the current design while keeping the
          design clean? 2. Besides private messaging, user also has public chat
          function inside the live broadcast. How can we visually make it
          distinguished so users would not confused by these two functions? 3.
          How to make sure that the users can watch broadcast and continue
          private chat with their friends at the same time? 4. How to encourage
          users to build connecions (following, following back) in the live
          broadcast?
        </p>{" "}
        <h4>Design Process:</h4>
        <p>
          Normally I start with paper sketch. Then I start making a low fidelity
          prototype to show the idea. Once the idea is getting more concrete,
          high fidelity design files and demo will be designed right after.
        </p>
        <iframe
          src="https://player.vimeo.com/video/318836153"
          width="640"
          height="360"
          frameborder="0"
          allowfullscreen
        />
        <h4>Design solution:</h4>
        <p>
          1. Make the original public chat icon into a combined icon and include
          private chat inside it. That way the main screen will not look crowded
          visually. 2. The public chat appears above the chat menu and the
          private chat shows below. This design visually shows the concept of
          'private' and 'public'. 3. The private chat area gets larger or
          smaller depending on the user needs. 4. There is a notification center
          in the design so users can get notified when she is followed by
          someone or someone just followed back.
        </p>
        <Image />
        <p>
          After releasing private message function, users started following each
          other to chat privately. Therefore we have gained a lot of new
          connections on the platform.
        </p>
        <h2>Case 2: Onboarding Flow</h2>
        <h3>[ My role: user flow, interactive demo and visual design ]</h3>
        <h4>Why we needed this design:</h4>
        <p>
          There are several goals we wanted to achieve with the onboarding flow
          redesign. 1. Phone number authentication: phone number authentication
          and contacts linking is an important step before users can invite
          their friends and recognize which friends are already on the platform.
          2. Invite page: it encourages users to link contacts and invite their
          friends to the platform. 3. Facebook linking in the edit profile page:
          by linking facebook, we can get the users' real name which can be used
          in the invitation. We believe that with real name and user's profile
          picture. Their friends will be more willing to tap on the invitation
          and download the App. 4. Allow notifications: we have a customized
          notification modal which we shows users' friends profile picture. The
          assumption for this design is that user will be more willing to
          turning the notification since they would like to know what their
          friends are doing. From a business perspective, this is good for
          getting user back to our App.{" "}
        </p>
        <h4>Design solution:</h4>
        <h2>Case 3: Video Chat</h2>
        <h3>[ My role: background video and interaction design ]</h3>
        <h4>Why we needed this design:</h4>
        <p>
          The new design focuses more on interaction among friends while the
          previous design is more about one-to-many broadcast. There are many
          users on the platform trying to hang out with their friends, so
          sometimes when the other ones join, it can make some users feel
          awkward and hard to join. Therefore, from a users' perspective, they
          can create a private group to hangout with their friends. From a
          business perspective, users will be more willing to invite friends to
          the platform for the private chat.{" "}
        </p>
        <h4>Design solution:</h4>
        <iframe
          src="https://player.vimeo.com/video/318839175"
          width="640"
          height="360"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        />
        <p>
          <a href="https://vimeo.com/318839175">Flurry_Onboarding</a> from{" "}
          <a href="https://vimeo.com/user22727822">Lisha Dai</a> on{" "}
          <a href="https://vimeo.com">Vimeo</a>.
        </p>
        <p>
          1. In the video chat design, we encourage users to invite friends with
          a big (+) button. 2. Shaking function to invite friends to chill.
        </p>
        <iframe
          src="https://player.vimeo.com/video/318836585"
          width="640"
          height="1138"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        />
        <p>
          <a href="https://vimeo.com/318836585">Flurry_VideoChat</a> from{" "}
          <a href="https://vimeo.com/user22727822">Lisha Dai</a> on{" "}
          <a href="https://vimeo.com">Vimeo</a>.
        </p>
        <Image />
        <h2>Case 4: Audio Only Mode</h2>
        <h3>[ My role: interactive demo and visual design ]</h3>
        <h4>Why we needed this design:</h4>
        <p>
          In the previous design we initially thought the users just want to
          background the app for a minute. But in fact, some broadcasters
          background the app for much longer time than we expected. It is a
          normal user case that they play other Apps and at the same time
          chatting on Flurry. In order to improve the viewers' user experience,
          we decided to make a new design for that.
        </p>
        <h4>Design solution:</h4>
        <p>
          We used user's voice to create waves behind their profile picture.
          Therefore, even when the broadcasters don't show their face, the
          visual still looks good.
        </p>
        <Image />
        <Image />
        <p>
          In Flurry, I experienced how does the startup in Sillicon Valley work.
          I really appreciate all the support given by my colleague and I have
          learned a lot from the design team.
        </p>
        <Recommendations />
      </div>
    );
  }
}

export default FlurryLiveApp;
