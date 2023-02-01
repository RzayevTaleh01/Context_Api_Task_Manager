import React, { useContext, useState, useEffect } from "react";
import { TaskListContext } from "../context/TaskListContext";

function TaskForm() {
  const { addTask, clearTask, editItem, editTask } = useContext(
    TaskListContext
  );
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    if (!editItem) {
      e.preventDefault();
      addTask(title);
      setTitle("");
    } else {
      editTask(title, editItem.id);
    }
  };
  const handleClearTask = () => {
    clearTask();
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
    } else {
      setTitle("");
    }
  }, [editItem]);

  return (
    <form action="" className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Add Task...."
        className="task-input"
        onChange={handleChange}
        required
      />
      <div className="buttons">
        <button className="btn add-task-btn">
          {editItem ? "Edit Task" : "Add Task"}
        </button>
        <button onClick={handleClearTask} className="btn clear-btn">
          Clear Task
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
