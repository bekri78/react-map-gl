import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders learn react link", () => {
  render(<Header title="Macaron" />);
  const headingElement = screen.getByText(/Macaron/i);
  headingElement;
});

test("renders learn react link", () => {
  render(<Header title="Macaron" />);
  const headingElement = screen.getByRole("heading");
  expect(headingElement).toBeInTheDocument();
});
