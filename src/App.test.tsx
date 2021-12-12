import React from "react";
import { render, screen } from "@testing-library/react";
import App, { initialState } from "./App";

test("renders the navbar container in the <App/> component", () => {
	const { getByTestId } = render(<App />);
	const container = getByTestId("navbar");
	expect(container).toBeInTheDocument();
});
