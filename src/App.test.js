import React from "react";
import * as rtl from "@testing-library/react";
import App from "./App";

test("Renders", async () => {
  rtl.render(<App />);
});
