import React, { Fragment } from "react";

// subHeadText = h3 tag, 3 image components with 3 alt tags
const ImageRow = ({
  subHeadText,
  ImageOne,
  ImageTwo,
  ImageThree,
  altOne,
  altTwo,
  altThree,
}) => {
  return (
    <Fragment>
      <h3 className="sub-head-text">{subHeadText}</h3>
      <div className="img-row">
        <ImageOne className="safety-step-img imageOne" alt={altOne} />
        <ImageTwo className="safety-step-img imageTwo" alt={altTwo} />
        <ImageThree className="safety-step-img imageThree" alt={altThree} />
      </div>
    </Fragment>
  );
};

export default ImageRow;
