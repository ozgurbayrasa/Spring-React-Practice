import './App.css';
import TodoTable from './components/TodoTable';

function App() {

  const todos =[
    {rowNumber: 1, rowDescription: 'Feed Puppy', rowAssigned: 'User one'},
    {rowNumber: 2, rowDescription: 'Water Plant', rowAssigned: 'User two'},
    {rowNumber: 3, rowDescription: 'Make Dinner', rowAssigned: 'User three'}
  ]

  return (
    <div className='mt-5 container'>
        <div className='card'>
          <div className='card-header'>
            Your Todo's
          </div>

          <div className='card-body'>
            <TodoTable todos={todos}/>
          </div>
        </div>
    </div>
  );
}
export default App;
