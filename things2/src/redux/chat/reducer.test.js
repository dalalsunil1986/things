import { messages } from "./reducer";
import * as types from "./ActionTypes";

describe ("Messages", () => {
	it("should return the initial empty state", () => {
		expect(messages(undefined, {})).toEqual([]);
	});

	it("should add message", () => {
		expect(messages([], {type: types.ADD_MESSAGE, message: "abc", author: "me"})).toEqual([{message: "abc", author: "me"}]);
	});
});

