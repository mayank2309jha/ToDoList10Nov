import React,{useEffect} from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {

    useEffect(() => {
        if(editTodo){
            setInput(editTodo.title);
        }
        else{
            setInput("");
        }
    },[setInput,editTodo]);

  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) => 
      todo.id === id ? { title, id, completed } : todo);
    setTodos(newTodo);
    setEditTodo("");
  };
  const onInputChange = (event) => {
    setInput(event.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter an Activity..."
        className="task-input"
        value={input}
        onChange={onInputChange}
      ></input>
      <button className="button-add" type="submit">
        {editTodo? "OK": "ADD"}
      </button>
    </form>
  );
};

export default Form;
