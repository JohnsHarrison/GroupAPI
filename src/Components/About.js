import React from 'react';
import buff from '../Images/buff.png';
import '../StylesAd/about.css'
import { useEffect } from 'react';


 function About() {
  useEffect(()  => {
    document.body.classList.add('about-bg');

    return () => {
        document.body.classList.remove('about-bg');
    };
});
  return (
    <div className="aboutContainer">
      <div className="logoContainer">
        <img src={buff} alt="" />
      </div>
      <div className="fade"></div>
      <section className="star-wars">
        <div className="crawl">
          
          <div className="title">
            <h1>Welcome to MOVIE BUFFalo!</h1>
          </div>

          

          <p>
            An app designed to cater to all of your movie needs! If you're looking to see if your favorite movie and or show is available for stream and if so, where to purchase it, MOVIE BUFFalo can help you! You can also stay updated with the latest movies by using our "Currently Playing" feature, where you can find out which movies are out in theaters! Looking for some cool promotional posters? Our 'Movie Posters' section has you covered! 
          </p>
          
        </div>
      <div id="nc-main" className="nc-main bg-cover bg-cc">
        <div className="full-wh">
          <div className="bg-animation">
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

