import React from "react";
import MediaQuery from "react-responsive";

const Responsive = () => {
  return (
    <div>
      <MediaQuery minWidth={501}>
        <h1>😬</h1>
        <p>It Looks like you are using desktop or laptop</p>
        <p>FaultLine is a mobile first app</p>
        <p>Emulate mobile below 500px to continue</p>
      </MediaQuery>
    </div>
  );
};

export default Responsive;
