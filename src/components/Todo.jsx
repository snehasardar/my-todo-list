import React, { useState } from 'react';
import { addAllList, addList } from '../actions/todo.action';
import { useDispatch } from 'react-redux';
import TodoLists from './TodoLists';
import API from '../shared/api'
import { v4 as uuidv4 } from 'uuid';

const Todo = () => {
	const [inputData, setInputData] = useState('');
	const dispatch = useDispatch();

	const handleClick = () => {
		API.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
			.then(res => {
				// res.data.length = 10
				console.log('response',res.data);
			
				let updateData = res.data.map((item)=> {
					return {
						id: uuidv4(),
						data: item.title,
						completed: false,
					}
				})
				dispatch(addAllList(updateData));
			} )
			.catch(err => {
				console.log(err);
			})
		
	}
	


	return (
		<div className="container">
			<h5>Todo list</h5>
			<div>
				<input type="text" placeholder="enter a text" value={inputData} onChange={(e) => setInputData(e.target.value)} />
				<button onClick={() => dispatch(addList(inputData))}>  + </button> {' '}
				<button onClick={ handleClick }> Autofill </button>
			</div>
			<div>
				<TodoLists />
			</div>
		</div>
	);
};
export default Todo;
