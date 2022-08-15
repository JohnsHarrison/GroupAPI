import React from 'react';
import buff from '../Images/buff.png';
import '../StylesAd/about.css'


 function About() {
  return (
    <div className="aboutContainer">
      <div className="logoContainer">
        <img src={buff} alt="" />
      </div>
      <div class="fade"></div>
      <section class="star-wars">
        <div class="crawl">
          
          <div class="title">
            <h1>Welcome to MOVIE BUFFalo!</h1>
          </div>

          

          <p>
            An app designed to cater to all of your movie needs! If you're looking to see if your favorite movie and or show is available for stream and if so, where to purchase it, MOVIE BUFFalo can help you! You can also stay updated with the latest movies by using our "Currently Playing" feature, where you can find out which movies are out in theaters! Looking for some cool promotional posters? Our 'Movie Posters' section has you covered! 
          </p>
          
        </div>
      <div id="nc-main" class="nc-main bg-cover bg-cc">
        <div class="full-wh">
          <div class="bg-animation">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div id="stars4"></div>
          </div>
        </div>
      </div>
      </section>
     
    </div>
  );
}


export default About

