const initialState = { name: "Peter", age: "31" };

const formObj = (state=initialState, action) => {
	switch (action.type) {
		case "EDIT_FORM":
			return Object.assign({}, state, {name: action.name, age: action.age});
		default:
			return state;
	}
};

export default formObj;
