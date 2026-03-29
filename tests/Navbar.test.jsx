import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Navbar from "../src/components/Navbar/Navbar";

describe("Navigation bar", () => {
  it("Has 3 buttons", () => {
    render(<Navbar />);
    expect(screen.getAllByRole("button")).toHaveLength(3);
  });
});
