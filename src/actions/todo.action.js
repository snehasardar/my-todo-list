import { ADD_LIST, DELETE_LIST, COMPLETED_LIST, UNCOMPLETED_LIST, ADD_ALL_LIST } from '../action-types/action.types';
import { v4 as uuidv4 } from 'uuid';

export const addList = (data) => {
	return (dispatch) => {
		dispatch({
			type: ADD_LIST,
			payload: {
				// id: new Date().getTime().toString(),
				id:uuidv4(),
				data: data,
				completed: false,
			},
		});
	};
};

export const addAllList = (data) => {
	return (dispatch) => {
		dispatch({
			type: ADD_ALL_LIST,
			payload: data
		});
		console.log('addAllList',data)
	};
	
};

export const deleteList = (id) => {
	return (dispatch) => {
		dispatch({
			type: DELETE_LIST,
			id,
		});
	};
};

export const completeList = (id) => {
	return (dispatch) => {
		dispatch({
			type: COMPLETED_LIST,
			id,
		});
	};
};

export const uncompleteList = (id) => {
	return (dispatch) => {
		dispatch({
			type: UNCOMPLETED_LIST,
			id,
		});
	};
};

