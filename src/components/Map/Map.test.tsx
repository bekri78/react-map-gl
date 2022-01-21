import React from "react";
import { getByTestId, render, cleanup } from "@testing-library/react";
import 'jest-dom/extend-expect'
import axiosMock from "axios"
import Map from "./Map";

test("render map", () => {
    render(<Map />);

});

