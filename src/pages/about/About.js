import React from "react";
import colorfulMap from "../../images/graphics/map-color.svg";
import mapAccent from "../../images/graphics/map-accent.png";
import pieChart from "../../images/graphics/pie-chart-about.svg";
import girlDog from "../../images/graphics/girl-dog-about.svg";
import girlCat from "../../images/graphics/gitl-cat-about.svg";
import fatherKid from "../../images/graphics/father-daughter-about.svg";
const About = () => {
  return (
    <div className="main-container no-scroll">
      <main className="about-main">
        <section className="about-links-info-container">
          <h1 className="header-about">We are FaultLine</h1>
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
          <h1 className="header-about">We live in 4 different states</h1>
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
          <h1 className="header-about">Our Jobs Are:</h1>
          <aside className="bullets-pie-chart-container">
            <img
              className="pie-chart"
              src={pieChart}
              alt="colorful map with teams location marked"
            />
            <aside className="list-container">
              <ul>
                <li className="orange-bullet">5 Developers</li>
                <li className="pink-bullet">2 Designers</li>
                <li className="turquoise-bullet">1 Team Leader</li>
              </ul>
            </aside>
          </aside>
        </section>
        <section className="between-us-container">
          <h1 className="header-about">Between Us We Have:</h1>
          <aside className="dogs-cats-container">
            <img className="imgDog" src={girlDog} alt="girl standing next to small dog" />
            <h1 className="header-about">3 Dogs</h1>
          </aside>
          <aside className="kids-container">
            <h1 className="header-about">6 Kids</h1>
            <img src={fatherKid} alt="girl standing next to small dog" />
          </aside>
          <aside className="dogs-cats-container">
            <img className="imgCat" src={girlCat} alt="girl sitting cross legged next to pink cat" />
            <h1 className="header-about">8 Cats</h1>
          </aside>
          <p>We are passionate about our product and we hope that you love it too!</p>
        </section>
      </main>
    </div>
  );
};

export default About;
