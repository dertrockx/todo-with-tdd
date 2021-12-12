import React from "react";
import { fireEvent, render } from "@testing-library/react";

import List from "./List";

const initialState = [
	{
		userId: 1,
		id: 1,
		title: "delectus aut autem",
		completed: false,
	},
	{
		userId: 1,
		id: 2,
		title: "quis ut nam facilis et officia qui",
		completed: false,
	},
	{
		userId: 1,
		id: 3,
		title: "fugiat veniam minus",
		completed: false,
	},
	{
		userId: 1,
		id: 4,
		title: "et porro tempora",
		completed: true,
	},
	{
		userId: 1,
		id: 5,
		title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
		completed: false,
	},
];

describe("Testing <List /> component", () => {
	it("should render 5 items", () => {
		const { getAllByTestId } = render(<List todos={initialState} />);

		const items = getAllByTestId("list-item");
		expect(items).toHaveLength(5);
	});
});
