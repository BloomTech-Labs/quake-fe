import React from "react";
import * as rtl from "@testing-library/react";
import ResourceCard from "./resourceCard";

it("should render 4 resource cards", () => {
  rtl.render(<ResourceCard />);
  const cards = document.getElementsByClassName("resource-card");
  expect(cards.length).toBe(4);
});
