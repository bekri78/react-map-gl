import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders learn react header", () => {
  render(<Header title="Macaron" />);
  const headingElement = screen.getByRole("heading");
  expect(headingElement).toBeInTheDocument();
});
