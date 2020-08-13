import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from "./components/app-header";
import  SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";
import Header2 from "./components/renovatio/header-2-column";









const App = ()=> {


  const todoData = [
    {label : 'Drink Cofee' , important: false},
    {label : 'Make Awesome App' , important: true},
    {label : 'Have a lunch' , important: false},
  ];



   return(
      <div>
      <Header2 name="Khamit" adress="ул Кутузова 136" ogrn="9293123123" tel="89006430971" sait="khamit.com" email="khamitamantaev@gamil.com" />
      <span> {(new Date()).toString()}</span>
      <AppHeader/>
      <SearchPanel/>
      <TodoList todos={todoData}/>
      <Header2/ >
      </div>
    
  );

} ;

ReactDOM.render(<App/>, document.getElementById("root"));
