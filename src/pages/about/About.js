import React from "react";
import colorfulMap from "../../images/graphics/map-color.svg";
import mapAccent from "../../images/graphics/map-accent.png";
import pieChart from "../../images/graphics/pie-chart-about.svg";
const About = () => {
  return (
    <div className="main-container no-scroll">
      <main className="about-main">
        <section className="about-links-info-container">
          <h1>We are FaultLine</h1>
          <aside className="about-team-img" />
          <section className="about-team-links">
            <a href={"https://github.com/Nicci498"} className="nw">
              Nicole
            </a>
            <a href={"https://github.com/l8nightswithJS"} className="ej">
              Eddie
            </a>
            <a href={"https://github.com/petedram"} className="pj">
              Pete
            </a>
            <a href={"https://www.linkedin.com/"} className="jg">
              Jeremy
            </a>
            <a href={"https://github.com/jjbreig5909"} className="jb">
              Jeff
            </a>
            <a href={"https://www.linkedin.com/"} className="ls">
              Laura
            </a>
            <a href={"https://github.com/cesarhj19"} className="ch">
              Cesar
            </a>
            <a href={"https://github.com/diehlkj"} className="kd">
              Ken
            </a>
          </section>
        </section>

        <section className="map-states-container">
          <h1>We live in 4 different states</h1>
          <img
            className="colorful-map"
            src={colorfulMap}
            alt="colorful map with teams location marked"
          />
          <img
            className="map-accent"
            src={mapAccent}
            alt="map accent background"
          />
        </section>

        <section className="pie-chart-section-container">
          <h1>Our Jobs Are:</h1>
          <aside className="bullets-pie-chart-container">
            <img
              className="pie-chart"
              src={pieChart}
              alt="colorful map with teams location marked"
            />
            <aside className="list-container">
              <ul>
                <li  className="orange-bullet">5 Developers</li>
                <li className="pink-bullet" >2 Designers</li>
                <li className="turquoise-bullet">1 Team Leader</li>
              </ul>
            </aside>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default About;
