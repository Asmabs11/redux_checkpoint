import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/actions"; 

function AddTask() {
  const [task, setTask] = useState({ id: "", description: "", isDone: false });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: name === "isDone" ? e.target.checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.id && task.description) {
      dispatch(addTask(task));
      setTask({ id: "", description: "", isDone: false }); 
    }
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="id"
        placeholder="Task Name"
        value={task.id}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Task Description"
        value={task.description}
        onChange={handleChange}
        required
      ></textarea>
      <label>
        <input
          type="checkbox"
          name="isDone"
          checked={task.isDone}
          onChange={handleChange}
        />
        Completed
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTask;
