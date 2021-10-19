import { ADD_LIST, DELETE_LIST, COMPLETED_LIST, UNCOMPLETED_LIST, ADD_ALL_LIST } from '../action-types/action.types';

const initialStates = {
	list: [],
	updatedList: [],
};

const todoCart = (state = initialStates, action) => {
	switch (action.type) {
		case ADD_LIST:
			const { id, data, completed } = action.payload;

			return {
				...state,
				list: [
					...state.list,
					{
						id: id,
						data: data,
						completed: completed,
					},
				],
			};

		case ADD_ALL_LIST:
			console.log('state', state)
			return {
				...state.list,
				list: action.payload
				};

		case COMPLETED_LIST:
			//console.log('list ', state.list);
			let array = [...state.list];
			const updateList = array.map((item) => {
				if (item.id == action.id) {
					item.completed = !item.completed;
				}
				return item;
			});
			// console.log('updateList', updateList);
			// console.log('completed ', updateList.completed);
			const completedList = updateList.filter((item) => item.completed == true);
			//console.log('completedList', completedList);
			return {
				...state,	
				updatedList: completedList,
			};

		case UNCOMPLETED_LIST:
			//console.log('under list ', state.list);
			let arr = [...state.list];
			const unchcekList = arr.map((item) => {
				if (item.id == action.id) {
					item.completed = !item.completed;
				}
				return item;
			});
			//console.log('unchcekList', unchcekList);
			const checkList = state.updatedList.filter((item) => item.id == action.id);
			//console.log('trueList', checkList);
			const trueList = unchcekList.filter((item) => item.completed == true);
			return {
				...state,
				list: arr,
				updatedList: trueList,
			};

		case DELETE_LIST:
			const newList = state.list.filter((item) => item.id != action.id);
			return {
				...state,
				list: newList,
			};

		default:
			return state;
	}
};

export default todoCart;
