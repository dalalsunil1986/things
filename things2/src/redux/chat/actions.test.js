import { addMessage, addUser } from "./actions";
import * as types from "./ActionTypes";

describe("adding a message", () => {
	it("should create an adding-message action with id #0", () => {
		const message = "abc";
		const author = "Me";
		const action = {
			type: types.ADD_MESSAGE,
			id: 0,
			message,
			author,
		};
		expect(addMessage(message, author)).toEqual(action);
	});

	it("adding a second message", () => {
		const message = "xyz";
		const author = "Me";
		const action = {
			type: types.ADD_MESSAGE,
			id: 1,
			message,
			author,
		};
		expect(addMessage(message, author)).toEqual(action);
	});
});

describe("adding a user", () => {
	it("should add first user", () => {
		const user = "Peter";
		const action = {
			type: types.ADD_USER,
			id: 0,
			name: user
		};
		expect(addUser(user)).toEqual(action);
	});
});

