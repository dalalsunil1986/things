export const editForm = ({ name, age }) => {
	if (name !== "Mark") {
		return {
			type: "EDIT_FORM",
			name,
			age
		}
	} else {
		return {
			type: "FAILED",
			reason: "you can't use Mark"
		}
	}
};

let timer = 0;
export const timerAdvance = () => {
	return {
		type: "TIMER_ADVANCE",
		timer: timer++
	};
};