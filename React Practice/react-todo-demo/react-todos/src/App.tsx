import React, {useState} from 'react';
import './App.css';
import {TodoTable} from './components/TodoTable';
import {NewTodoForm} from './components/NewTodoForm';

function App() {

  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    {rowNumber: 1, rowDescription: 'Feed Puppy', rowAssigned: 'User one'},
    {rowNumber: 2, rowDescription: 'Water Plant', rowAssigned: 'User two'},
    {rowNumber: 3, rowDescription: 'Make Dinner', rowAssigned: 'User one'},
    {rowNumber: 4, rowDescription: 'Charge Battery', rowAssigned: 'User one'}
  ])

  const addTodo = (description: string, assigned: string) =>{
    if(todos.length > 0){

      let rowNumber;
      if (todos.length > 0){
        rowNumber = todos[todos.length - 1].rowNumber + 1;
      }
      else{
        rowNumber = 1
      }

      const newTodo = {rowNumber: todos.length + 1,
                       rowDescription: description, 
                       rowAssigned: assigned};

      setTodos(todos => [...todos, newTodo])
    }
  }

  const deleteTodo = (deleteTodoRowNumber: number) => {
    
    let filtered = todos.filter(function (value){
      return value.rowNumber !== deleteTodoRowNumber;
    });

    setTodos(filtered);
  }

  return (
    <div className='mt-5 container'>
        <div className='card'>
          <div className='card-header'>
            Your Todo's
          </div>

          <div className='card-body'>
            <TodoTable todos={todos} deleteTodo={deleteTodo}/>
            <button className='btn btn-primary' 
            onClick={() => setShowAddTodoForm(!showAddTodoForm)}>
              {showAddTodoForm ? 'Close New Todo' : 'New Todo'}
            </button>
            
            {
              showAddTodoForm && <NewTodoForm addTodo={addTodo}/>
            }
            
          </div>
        </div>
    </div>
  );
}
export default App;
