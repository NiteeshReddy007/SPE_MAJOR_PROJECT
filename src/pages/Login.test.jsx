import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";  // Updated import
import Login from "./Login";

test("renders login form", () => {
  render(<Login />, { wrapper: MemoryRouter });

  expect(screen.getByPlaceholderText(/username/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
  expect(screen.getByText(/log in/i)).toBeInTheDocument();
  expect(screen.getByText(/don't have an account/i)).toBeInTheDocument();
});
