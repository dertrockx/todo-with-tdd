import React from "react";
import { Flex, Checkbox, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
type ListItemProps = {
	done?: boolean;
	onClick?: () => void;
	onDelete?: () => void;
	label?: string;
	[key: string]: any;
};
function ListItem({
	done,
	onClick,
	onDelete,
	label = "default label",
	...rest
}: ListItemProps) {
	return (
		<Flex
			data-testid="list-item"
			{...rest}
			justifyContent="space-between"
			paddingTop={2}
			paddingBottom={2}
		>
			<Checkbox
				data-testid="status-checkbox"
				defaultIsChecked={done}
				isChecked={done}
				onChange={onClick}
				textDecor={done ? "line-through" : "none"}
			>
				{label}
			</Checkbox>
			<IconButton
				data-testid="delete-button"
				aria-label="Delete todo"
				icon={<DeleteIcon />}
				colorScheme="red"
				size="sm"
				variant="outline"
				onClick={onDelete}
			/>
		</Flex>
	);
}

export default ListItem;
