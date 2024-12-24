import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import AddTask from './Components/Addtask';
import ListTask from './Components/ListTask';
import Task from './Components/Task';
import { getTask } from './Redux/actions';

function App() {
  const disptach = useDispatch()
  disptach(getTask(Task))
   const tasks = useSelector(state=> state.tasks)
   console.log(tasks);

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <AddTask />
      {tasks &&  <ListTask />}
      
    </div>
  );
}

export default App;
