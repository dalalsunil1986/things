import * as types from "./ActionTypes";

export const messages = (state=[], action) => {
	switch (action.type) {
		case types.ADD_MESSAGE:
		case types.MESSAGE_RECEIVED:
			return state.concat([{
				message: action.message,
				author: action.author,
				id: action.id
			}]);
		default:
			return state;
	}
};

export const users = (state=[], action) => {
	switch (action.type) {
		case types.ADD_USER:
			return state.concat([{ name: action.name, id: action.id }]);
		case types.USER_LIST:
			return action.users;
		default:
			return state;
	}
};


