import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../../App";
import Activity from "./Activity";

test("Renders Search Button", async () => {
    rtl.render(<App/>);
    const wrapper = rtl.render(<Activity/>);
    const element = wrapper.getByText(/submit/i);

    expect(element).toBeVisable();
})