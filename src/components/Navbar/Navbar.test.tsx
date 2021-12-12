import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

test("should show navbar element", () => {
	const { getByTestId } = render(<Navbar />);
	const container = getByTestId("navbar-container");
	expect(container).toBeInTheDocument();
});

test("should render a logo text on navbar", () => {
	const { getByTestId } = render(<Navbar logoText="Todo App" />);
	const logoText = getByTestId("navbar-logo-text");
	expect(logoText).toBeInTheDocument();

	expect(logoText).toHaveTextContent("Todo App");
});

test("should render a light mode / dark mode toggle", () => {
	const { getByTestId } = render(<Navbar />);
	const toggle = getByTestId("navbar-theme-toggle");
	expect(toggle).toBeInTheDocument();
});
