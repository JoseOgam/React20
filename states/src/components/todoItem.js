import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { deleteTask } from "./redux/tasksSlice";
import Modal from './modal';

const TodoItem = ({ id, title, index, body }) => {
	const [isOpen, setIsOpen] = useState(false)

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
                {body}
            </div>
			<div className="actions">
				<button className="update-task-button" onClick={()=>setIsOpen(true)}>Update</button>
				<button className="remove-task-button" onClick={()=>{
					removeTask();
				}}>Delete</button>
			</div>
			{isOpen && <Modal setIsOpen={setIsOpen} />}
		</div>
	);
};

export default TodoItem;