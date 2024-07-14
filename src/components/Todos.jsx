import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/Todo/todoSlice';

function Todos() {
    const todos = useSelector(state => state.todo?.todos); 
    const dispatch = useDispatch();

    return (
        <div>
            <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Todos</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {todos?.map(todo => ( 
                    <li key={todo.id} style={{ marginBottom: '10px', borderBottom: '1px solid #ccc', paddingBottom: '10px', display: 'flex', alignItems: 'center' }}>
                        <span style={{ flex: 1 }}>{todo.text}</span>
                        <button 
                            style={{ padding: '5px 10px', fontSize: '14px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                            onClick={() => dispatch(removeTodo(todo.id))}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todos;
