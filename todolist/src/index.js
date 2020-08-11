import React from 'react';
import ReactDOM from 'react-dom';


const TodoList = () => {
  return (
    <ul>
  <li>Learn React</li>
  <li>My name is Khamit!</li>
  </ul>
  );
};

const 

const el = (
  <div>
  <h1>My todolist</h1>
  <input placeholder="search"/>
  <TodoList/>
  </div>
)


ReactDOM.render(el, document.getElementById("root"));
