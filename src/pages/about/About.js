import React from "react";
import aboutMap from "../../images/graphics/about-us-map.png";
import aboutVerticalImg from "../../images/graphics/about-us-vertical.png";
const About = () => {
  return (
    <div className="main-container no-scroll">
      <main className="about-main">
        <section className="about-links-container">
          <h1>We are FaultLine</h1>
          <aside className="about-team-img" />
          <section className="about-team-links">
            <a href={"https://github.com/l8nightswithJS"} className="ej">
              Eddie
            </a>
            <a href={"https://www.linkedin.com/"} className="ls">
              Laura
            </a>
            <a href={"https://github.com/diehlkj"} className="kd">
              Ken
            </a>
            <a href={"https://github.com/jjbreig5909"} className="jb">
              Jeff
            </a>
            <a href={"https://github.com/petedram"} className="pj">
              Pete
            </a>
            <a href={"https://github.com/cesarhj19"} className="ch">
              Cesar
            </a>
            <a href={"https://www.linkedin.com/"} className="jg">
              Jeremy
            </a>
            <a href={"https://github.com/Nicci498"} className="nw">
              Nicole
            </a>
          </section>
        </section>

        <section className="about-map-container">
          <aside className="about-horizontalbg">
            <h1>We live in 8 different states</h1>
          </aside>
          <aside className="about-map-verticalbg">
            <img className="imgMap" src={aboutMap} alt="map of United States" />
            <img className="vertical-accent" src={aboutVerticalImg} alt="background accent blue" />
          </aside>
        </section>
      </main>
    </div>
  );
};

export default About;
