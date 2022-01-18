import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders   react header", () => {
  render(<Header title="Macaron" />);
  const headingElement = screen.getByRole("heading", { name: "Cats" });
  expect(headingElement).toBeInTheDocument();
});
