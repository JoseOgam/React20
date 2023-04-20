import React from 'react';
import TodoItem from '../components/todoItem';
import { useSelector } from "react-redux";

const TodoList = () => {
	const todos = useSelector((state) => {
		// todos here comes from the stores i.e todos: tasksReducers
		return state.todos;
	});

	return (
		<ul className="tasks-list">
			{todos.map((todo, index) => (
				<TodoItem key={index} index={index} id={todo.id} title={todo.title} body={todo.body} completed={todo.status} />
			))}
		</ul>
	);
};

export default TodoList;