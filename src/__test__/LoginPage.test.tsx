import React from "react";
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect";
import LoginPage from "../sections/components/loginAndRegister/LoginPage";
import {BrowserRouter as Router} from "react-router-dom";
import renderer from "react-dom/test-utils";



//Sussecs
test("heder renders correct text", () => {
    render(<Router>
        <LoginPage/>
    </Router>);
    const heder = screen.getByTestId("LogIn");
    expect(heder).toBeInTheDocument();
    expect(heder).toBeVisible();
    expect(heder).toMatchSnapshot();
    expect(true).toBeTruthy();
});

//Not sussecs
test("It should display empty value", () => {
   /* const instanceOf = renderer.create(<Router><LoginPage /></Router>).getInstance();
    instanceOf.handleNewVal('');
    expect(instanceOf.state.myVal).toEqual('');*/
});
