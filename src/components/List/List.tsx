import React, { KeyboardEvent, useState } from "react";
import {
	Box,
	InputGroup,
	Input,
	useColorModeValue,
	Kbd,
	InputRightElement,
} from "@chakra-ui/react";
import ListItem from "../ListItem";
type Todo = {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
};

type ListProps = {
	todos?: Todo[];
};

function List({ todos = [] }: ListProps) {
	const bg = useColorModeValue("white", "gray.900");
	const color = useColorModeValue("black", "white");

	const [state, setState] = useState(todos);
	const [todo, setTodo] = useState("");
	function handleClick(id: number) {
		const newState = state.map(({ completed, ...todo }) => {
			if (id === todo.id) completed = !completed;
			return { completed, ...todo };
		});
		setState([...newState]);
	}

	function addTodo(e: KeyboardEvent) {
		if (e.key !== "Enter") return;
		setState((prevState) => [
			...prevState,
			{
				userId: 1,
				id: Date.now(),
				title: todo,
				completed: false,
			},
		]);
		setTodo("");
	}

	function deleteTodo(id: number) {
		setState((prevState) => prevState.filter((todo) => todo.id !== id));
	}
	return (
		<Box
			margin={"auto"}
			maxW={"container.md"}
			background={bg}
			color={color}
			shadow={"md"}
			padding={5}
			borderRadius={3}
		>
			<InputGroup>
				<Input
					type="text"
					value={todo}
					onChange={(e) => setTodo(e.target.value)}
					onKeyDown={addTodo}
				/>
				<InputRightElement
					width="4.5rem"
					children={
						<span>
							<Kbd>Enter</Kbd>
						</span>
					}
				/>
			</InputGroup>

			{state.map(({ id, title, completed }) => (
				<ListItem
					key={id}
					label={title}
					done={completed}
					onClick={() => handleClick(id)}
					onDelete={() => deleteTodo(id)}
				/>
			))}
		</Box>
	);
}

export default List;
