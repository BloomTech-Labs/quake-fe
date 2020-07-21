import React from "react";
import * as rtl from "@testing-library/react";
import ListTypeSolid, { items } from "./listTypeSolid";

it("should render list component, with solid icon", () => {
  rtl.render(<ListTypeSolid />);
  const listItem = document.getElementsByClassName("list-item");
  expect(listItem.length).toBe(items.length);
});
