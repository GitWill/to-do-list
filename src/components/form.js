import React from "react";

//in the next line I am importing ({this stuff})
const Form = ({setInputText,todos,setTodos,inputText}) => {
  //I can write javascript code and functions here
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  }

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, 
      { text: inputText, completed: false, id:Math.floor(Math.random() * 1000)}
    ]);
    setInputText("");
  }

    return(
      <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" id="myInput" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
}

export default Form;
