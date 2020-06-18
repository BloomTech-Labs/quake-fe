import React from "react";
import * as rtl from "@testing-library/react";
import App from "./App";


beforeEach(() => {
  const script = document.createElement('script');
  document.head.appendChild(script);
})

describe("App renders", () => {

  it("should render...", () => {
    rtl.render(<App />);
  });
});