import React, { useState } from 'react';
import './App.scss';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        text="text"
        className="input"
        value={value}
        placeholder="Add Task"
        onChange={e => setValue(e.target.value)}
      />
    </form>
  )
};

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }} className="todo">
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>X</button>
      </div>
    </div>
  )
};

const App = () => {

  const [todos, setTodos] = useState([
    {
      text: "Learn React.",
      isCompleted: false
    },
    {
      text: "Learn Angular.",
      isCompleted: false
    },
    {
      text: "Build Todo app with react.",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodo = [...todos, { text }];
    setTodos(newTodo);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}

        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
