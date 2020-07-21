import React from "react";
import * as rtl from "@testing-library/react";
import ListTypePlus, { items } from "./listTypePlus";

it("should render list component, with plus icon", () => {
  rtl.render(<ListTypePlus />);
  const listItem = document.getElementsByClassName("list-item");
  expect(listItem.length).toBe(items.length);
});
