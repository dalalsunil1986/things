export const editForm = ({ name, age }) => {
	console.info('>> edit form received name', name);
	return {
		type: "EDIT_FORM",
		name,
		age
	}
};