import React from "react";
import MediaQuery from "react-responsive";

const Responsive = () => {
  return (
    <div className="Wipe">
      <MediaQuery minWidth={501}>
        <span role="img" aria-label="Grimacing Face">
          😬
        </span>
        <p>It Looks like you are using desktop or laptop.</p>
        <br />
        <p>FaultLine is a mobile first app.</p>
        <br />
        <p>Emulate mobile below 500px to continue.</p>
        <br />
      </MediaQuery>
    </div>
  );
};

export default Responsive;
