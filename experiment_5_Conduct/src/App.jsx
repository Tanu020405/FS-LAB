
import './App.css';
import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store/store';
import { addTodo, toggleTodo, deleteTodo } from './store/todosSlice';

function TodoApp() {
	const todos = useSelector((state) => state.todos);
	const dispatch = useDispatch();
	const [input, setInput] = React.useState('');

	const handleAdd = (e) => {
		e.preventDefault();
		if (input.trim()) {
			dispatch(addTodo(input));
			setInput('');
		}
	};

	return (
		<div className="todo-container">
			<h1>Todo List</h1>
			<form onSubmit={handleAdd} >
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Add a new task"
				/>
				<button type="submit">Add</button>
			</form>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id} >
						<span
							onClick={() => dispatch(toggleTodo(todo.id))}
							
						>
							{todo.text}
						</span>
						<button onClick={() => dispatch(deleteTodo(todo.id))}>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default function App() {
	return (
		<Provider store={store}>
			<TodoApp />
		</Provider>
	);
}
