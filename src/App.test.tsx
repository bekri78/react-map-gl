import React from "react";
import { getByTestId, render, screen } from "@testing-library/react";
import App from "./App";

test("render map", async () => {

    render(<App />)
    const findId = await screen.findByTestId('map')
    expect(findId).toBeInTheDocument();

});
