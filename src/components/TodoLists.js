import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteList, completeList } from '../actions/todo.action';
import TodoCompleted from './TodoCompleted';

const TodoLists = () => {
	const { list } = useSelector((state) => state.todoCart);
	
	const dispatch = useDispatch();
	console.log('list ', list);

	return (
		<div className="container">
			<table className="table">
				<tbody>
					{list?.map((item, index) => {
						if(item.completed == false){
							return (
								<tr key={index}>
									<td>
										<input type="checkbox" id="completed" checked={item.completed} onChange={() => dispatch(completeList(item.id))} />
									</td>
									<td>{item.data}</td>
									<td>
										<button onClick={() => dispatch(deleteList(item.id))}> delete </button>
									</td>
								</tr>
							);

						}
					})}
				</tbody>
			</table>
			
			<div>
				<TodoCompleted />
			</div>
		</div>
	);
};
export default TodoLists;
