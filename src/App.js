import React, {useState} from "react";
import './App.css';
//importing components
import Form from './components/form'
import ToDoList from './components/todolist'

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
       <header>
         <h1>Will's Todo List</h1>
       </header>
      <Form 
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
       <ToDoList todos={todos} />
    </div>
  );
}

export default App;
