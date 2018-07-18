import { push } from 'react-router-redux'


export function fetchPeople() {
	return (dispatch, getState, api) => {
		dispatch(fetchPeopleBegin());
		return fetch(`${api}/people`)
			.then(handleErrors)
			.then(res => res.json())
			.then(json => {
				dispatch(fetchPeopleSuccess(json))
				return json.people;
			})
			.catch(error => dispatch(genericError(error)))
	}
};

export const fetchPeopleBegin = () => ({
	type: "FETCH_PEOPLE_BEGIN",
});

export const fetchPeopleSuccess = people => ({
	type: "FETCH_PEOPLE_SUCCESS",
	payload: { people }
});

export const genericError = error => {
	console.info(">>> Generic error handler:", error);
	return {
		type: "SET_ERROR_MESSAGE",
		payload: {
			errorMessage: "generic error happen"
		}
	}
};


export function addPerson(data) {
	return (dispatch, getState, api) => {
		return fetch(`${api}/people`, {
				method: "POST",
				body: JSON.stringify(data)
			})
			.then(handleErrorsExt)
			.then(json => {
				if (json.statusCode !== 406) {
					dispatch(addPersonAction(data));
					dispatch(push('/dashboard/forms/form6'));
					// dispatch(NavigationActions.navigate({ routeName: 'forms/form6' }));
					return;
				} else {
					let msg = json.message;
					if (json.nextAvailableId) {
						msg += ` ${json.nextAvailableId}`;
					}
					dispatch(setErrorMessage(msg))
				}
			})
			.catch((error) => dispatch(genericError(error)))
	}
}

export function deletePerson(id) {
	return (dispatch, getState, api) => {
		return fetch(`${api}/people`, {
				method: "DELETE",
				body: JSON.stringify({id})
			})
			.then(handleErrors)
			.then(() => {
				dispatch(deletePersonAction(id));
				return;
			})
			.catch(error => dispatch(genericError(error)))
	}
}

const addPersonAction = data => ({
	type: "ADD_PERSON_SUCCESS",
	payload: { data }
});

const deletePersonAction = id => ({
	type: "DELETE_PERSON_SUCCESS",
	payload: { id }
});

const setErrorMessage = msg => ({
	type: "SET_ERROR_MESSAGE",
	payload: { errorMessage: msg }
});

function handleErrors(response) {
	if( ! response.ok) {
		response.json().then(data => {
			throw Error(response.statusText);
		})
	}
	return response;
}

function handleErrorsExt (response) {
	return response.json().then(json => {
		if( ! response.ok && json.statusCode !== 406) {
			throw Error(response.statusText);
		}
		return json ? json : {};
	})
}
