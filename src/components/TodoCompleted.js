import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uncompleteList } from '../actions/todo.action';

const TodoCompleted = () => {
	const { updatedList } = useSelector((state) => state.todoCart);
	console.log('todoCompleted', updatedList);
    //const len = updatedList.length;
	const dispatch = useDispatch();
	return (
		<div className="container">
			<h5>Completed list </h5>
			<table className="table">
				<tbody>
					{ 
                    updatedList?.map((items, index) => {
						return (
							<tr key={index}>
								<td><input type="checkbox" id="completed" 
                                    checked={items.completed} onChange={() => dispatch(uncompleteList(items.id))} /></td>
								 <td>{items.data}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};
export default TodoCompleted;
