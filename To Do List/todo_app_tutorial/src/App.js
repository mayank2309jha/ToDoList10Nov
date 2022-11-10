import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import React, { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [input, setInput] = new useState("");
  const [todos, setTodos] = new useState([]);
  const [editTodo, setEditTodo] = new useState(null);

  return (
    <div className="container">
      <div className="app-wrapper">
        <Header />
        <Form input={input} setInput={setInput} todos={todos} setTodos = {setTodos} editTodo = {editTodo} setEditTodo = {setEditTodo}/>
        <TodoList todos = {todos} setTodos = {setTodos} setEditTodo = {setEditTodo} />
      </div>
    </div>
  );
}

export default App;

{
  /* <div className="container">

<div className="app-wrapper">

  <div>
    <Header />
  </div>
  <div>
    <Form />
  </div>

</div>
</div> */
}
