import React from "react";
import { Flex, Heading, IconButton, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
type NavbarProps = {
	logoText?: string;
	[key: string]: any;
};

function Navbar({ logoText = "Tech App", ...rest }: NavbarProps) {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Flex
			data-testid="navbar-container"
			maxW={"100vw"}
			shadow={"md"}
			justifyContent={"space-between"}
			flexDir={"row"}
			padding={5}
			{...rest}
		>
			<Heading data-testid="navbar-logo-text">{logoText}</Heading>
			<IconButton
				aria-label="Toggle color mode"
				data-testid="navbar-theme-toggle"
				onClick={toggleColorMode}
				icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
			/>
		</Flex>
	);
}

export default Navbar;
