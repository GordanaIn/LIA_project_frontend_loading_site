import React from "react";
import LandingPage from "../sections/pages/LandingPage";
import {render} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect";

test("heder renders with correct text",() =>{
    const component = render(<LandingPage/>);
    const headerEl = component.getByTestId("heder");

    expect(headerEl.textContent).toBe("Välkomen");
})
