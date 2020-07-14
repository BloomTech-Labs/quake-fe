import React from "react";
import aboutMap from "../images/about-us-map.png";
import aboutVerticalImg from "../images/about-us-vertical.png"
const About = () => {
  return (
    <>
      <div className="spacer" />
      <main className="about-main">
        <section className="about-links-container">
          <h1>We are FaultLine</h1>
          <aside className="about-team-img" />
          <section className="about-team-links">
            <a className="ej">Eddie</a>
            <a className="ls">Laura</a>
            <a className="kd">Ken</a>
            <a className="jb">Jeff</a>
            <a className="pj">Pete</a>
            <a className="ch">Cesar</a>
            <a className="jg">Jeremy</a>
            <a className="nw">Nicole</a>
          </section>
        </section>

        <section className="about-map-container">
          <aside className="about-horizontalbg">
            <h1>We live in 8 different states</h1>
          </aside>
          <aside className="about-map-verticalbg">
            <img className="imgMap" src={aboutMap} alt="map of United States"/>
            <img className="vertical-accent" src={aboutVerticalImg} />
          </aside>
        </section>
      </main>
    </>
  );
};

export default About;
