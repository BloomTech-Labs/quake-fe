import React from "react";
import * as rtl from "@testing-library/react";
import ImageRow from "./imageRow";
import { Drop, Cover, HoldOn } from "./imageImports";

it("should render image row", () => {
  const textValues = {
    subHeadText: "If possible",
    altOne: "image of person dropping to the floor",
    altTwo: "image of person moving under cover",
    altThree: "image of person holding on to cover",
  };
  rtl.render(
    <ImageRow
      subHeadText={textValues.subHeadText}
      ImageOne={Drop}
      altOne={textValues.altOne}
      ImageTwo={Cover}
      altTwo={textValues.altTwo}
      ImageThree={HoldOn}
      altThree={textValues.altThree}
    />
  );
  const subHead = document.querySelector(".sub-head-text"),
    imageOne = document.querySelector(".imageOne"),
    imageTwo = document.querySelector(".imageTwo"),
    imageThree = document.querySelector(".imageThree");
  expect(subHead).toHaveTextContent(textValues.subHeadText);
  expect(imageOne.getAttribute("alt").valueOf()).toBe(textValues.altOne);
  expect(imageTwo.getAttribute("alt").valueOf()).toBe(textValues.altTwo);
  expect(imageThree.getAttribute("alt").valueOf()).toBe(textValues.altThree);
});
