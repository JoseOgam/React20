import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTask } from "../components/redux/tasksSlice";

const AddTodo = () => {
    const [value, setValue] = useState('');
    const [body, setBody] = useState('')

	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();

		if(value.trim().length  === 0)
		{
			alert("Enter a task before adding !!");
            setValue("");
            setBody("")
       
			return;
		}

		dispatch(
			addTask({
                title: value,
                body: body
			})
		);

        setValue("");
        setBody("")
	};

	return (
		<div className="add-todo">
			<input
				type="text"
				className="task-input"
				placeholder="title"
				value={value}
				onChange={(event) => setValue(event.target.value)}
            />
            <input
                type='text'
                className='task-input'
                placeholder='body'
                value={ body } onChange={ (event) => setBody(event.target.value) } />

			<button className="task-button" onClick={onSubmit}>
				Save
			</button>
		</div>
	);
};

export default AddTodo