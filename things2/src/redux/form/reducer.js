const initialState = { name: "Peter", age: "31", failed: false };

const formObj = (state=initialState, action) => {
	switch (action.type) {
		case "FAILED":
			return Object.assign({}, state, {failed: true, reason: action.reason});
		case "EDIT_FORM":
			return Object.assign({}, state, {name: action.name, age: action.age, failed: false});
		case "TIMER_ADVANCE":
			return Object.assign({}, state, {timer: action.timer});
		default:
			return state;
	}
};

export default formObj;
