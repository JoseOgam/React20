import React from 'react';
import TodoItem from '../components/todoItem';
import { useSelector } from "react-redux";

const TodoList = () => {
	const todos = useSelector((state)=>{
		return state.tasks;
	});

	return (
		<ul className="tasks-list">
			{todos.map((todo, index) => (
				<TodoItem key={index} index={index} id={todo.id} title={todo.name} body={todo.body} completed={todo.status} />
			))}
		</ul>
	);
};

export default TodoList;