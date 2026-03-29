import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("App component", () => {
  it("Contains navigation bar", () => {
    render(<App />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});
