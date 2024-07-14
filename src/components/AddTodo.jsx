import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/Todo/todoSlice';


function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (!input.trim()) return; // Prevent adding empty todos
        dispatch(addTodo(input));
        setInput('');
    };

    return (
        <form onSubmit={addTodoHandler}>
            <input 
                type="text"
                placeholder="Enter a Todo.." 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
            />
            <button 
                type="submit"
            >
                Add
            </button>
        </form>
    );
}

export default AddTodo;
