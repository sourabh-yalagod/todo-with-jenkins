import React, { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState({ id: 0, text: "" });
  const [todos, setTodos] = useState([]);
  const handleTodo = (e) => {
    e.preventDefault();
    setTodos((pre) => [...pre, todo]);
    setTodo({ id: 0, text: "" });
  };
  const deleteTodo = ({id}) => {
    console.log(id);
    
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };
  return (
    <form>
      <input
        type="text"
        onChange={(e) => setTodo({ id: Math.random(), text: e.target.value })}
      />
      <button onClick={handleTodo}>Create Todo</button>
      {todos && (
        <ul>
          {todos?.map((task) => {
            return (
              <div>
                <li key={task?.id}>{task?.text}</li>
                <button onClick={() => deleteTodo({id:task.id})}>X</button>
              </div>
            );
          })}
        </ul>
      )}
    </form>
  );
};

export default App;
