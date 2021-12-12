import React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import List from "./components/List";
import theme from "./theme";

export const initialState = [
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

function App() {
	return (
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<Main />
		</ChakraProvider>
	);
}

function Main() {
	return (
		<Box minHeight="100vh">
			<Navbar data-testid="navbar" logoText="Todo app" />
			<Box marginTop={5}>
				<List todos={initialState} />
			</Box>
		</Box>
	);
}

export default App;
