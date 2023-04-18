import React from 'react';
import { useDispatch } from "react-redux";
import { deleteTask } from "./redux/tasksSlice";

const TodoItem = ({ id, title, index }) => {

	const dispatch = useDispatch();

	const removeTask=()=>{
		dispatch(
			deleteTask({
				id: id
			})
		)
	}

	return (
		<div className="task-item">
			<div>
				{index + 1}. {title}
			</div>
			<div>
				<button className="remove-task-button" onClick={()=>{
					removeTask();
				}}>Delete</button>
			</div>
		</div>
	);
};

export default TodoItem;