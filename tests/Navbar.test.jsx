import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Navbar from "../src/components/Navbar/Navbar";
import { MemoryRouter } from "react-router";

describe("Navigation bar", () => {
  it("Has 3 buttons for navigation", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    expect(screen.getAllByRole("link")).toHaveLength(3);
  });
});
