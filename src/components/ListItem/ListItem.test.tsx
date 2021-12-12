import React from "react";
import {
	fireEvent,
	getAllByTestId,
	render,
	screen,
} from "@testing-library/react";
import ListItem from "./ListItem";

test("should render <ListItem /> component", () => {
	const { getByTestId } = render(<ListItem />);
	const listItem = getByTestId("list-item");
	expect(listItem).toBeInTheDocument();
});

test("should render a checkbox in the list item", () => {
	const { getByTestId } = render(<ListItem />);
	const checkbox = getByTestId("status-checkbox");
	expect(checkbox).toBeInTheDocument();
});

test("should render a checked checkbox", () => {
	const { getByTestId } = render(<ListItem done />);
	const checkbox = getByTestId("status-checkbox");

	const inputEl = checkbox.firstChild as HTMLInputElement;
	expect(inputEl.checked).toEqual(true);
});

test("should an unchecked checkbox", () => {
	const { getByTestId } = render(<ListItem done={false} />);
	const checkbox = getByTestId("status-checkbox");

	const inputEl = checkbox.firstChild as HTMLInputElement;
	expect(inputEl.checked).toEqual(false);
});

test("should render a text label", () => {
	const { getByTestId } = render(<ListItem label="Test label" />);
	const checkbox = getByTestId("status-checkbox");

	const label = checkbox.getElementsByClassName("chakra-checkbox__label")[0];
	expect(label).toBeInTheDocument();
	expect(label).toHaveTextContent("Test label");
});

test("should render a text with style of strikethrough when `done` is true", () => {
	const { getByTestId } = render(<ListItem done />);
	const checkbox = getByTestId("status-checkbox");

	expect(checkbox).toHaveStyle(`
    text-decoration: line-through;
  `);
});

test("should click onChange prop of <Checkbox/> inside <ListItem />", () => {
	const handler = jest.fn();
	const { getByTestId } = render(<ListItem onClick={handler} />);

	const checkbox = getByTestId("status-checkbox");
	fireEvent.click(checkbox);
	expect(handler).toBeCalledTimes(1);

	// expect(initialProps.done).toEqual(true);
});

test("should change props value", () => {
	const initialProps = {
		done: false,
	};
	const handler = () => {
		const { done } = initialProps;
		Object.assign(initialProps, { done: !done });
	};

	const { getByTestId } = render(<ListItem onClick={handler} />);

	const checkbox = getByTestId("status-checkbox");
	fireEvent.click(checkbox);

	expect(initialProps.done).toEqual(true);
});

test("should render a delete button", () => {
	const { getByTestId } = render(<ListItem />);
	const button = getByTestId("delete-button");

	expect(button).toBeInTheDocument();
});

test("should call onDelete handler", () => {
	const handler = jest.fn();
	const { getByTestId } = render(<ListItem onDelete={handler} />);
	const button = getByTestId("delete-button");
	fireEvent.click(button);

	expect(handler).toBeCalledTimes(1);
});
