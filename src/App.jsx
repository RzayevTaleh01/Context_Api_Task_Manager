import React from "react";
import Header from "./layout/Header";
import TaskList from "./components/TaskList";
import TaskListContextProvider from "./context/TaskListContext";
import TaskForm from "./components/TaskForm";
import "./assets/style.css";

function App() {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
