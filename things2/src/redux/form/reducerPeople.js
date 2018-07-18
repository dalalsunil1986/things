const initialState = {
	items: [],
	loading: false,
	loaded: false,
	error: null
};

const People = (state=initialState, action) => {
	switch (action.type) {
		case "ADD_PERSON":
			return state.concat([{
				name: action.name,
				age: action.age,
				id: action.id
			}]);

		case "DELETE_PERSON_SUCCESS":
			return {
				...state,
				items: state.items.filter(item => (item.id !== action.payload.id)),
				loading: false,
				loaded: true,
				error: null
			}

		case "FETCH_PEOPLE_BEGIN":
			return {
				...state,
				items: [],
				loading: true,
				error: null
			}
		case "FETCH_PEOPLE_SUCCESS":
			return {
				...state,
				items: action.payload.people,
				loading: false,
				loaded: true,
				error: null
			}

		case "ADD_PERSON_SUCCESS":
			return Object.assign({}, state, {
					items: [
						...state.items,
						action.payload.data
					],
					error: null,
				});
		case "SET_ERROR_MESSAGE":
			return {
				...state,
				error: action.payload.errorMessage
			};

		default:
			return state;
	}
};

export default People;
