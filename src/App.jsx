import { useEffect, useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import AllTasks from './pages/AllTasks'
import NewTasks from './pages/NewTasks'
import EditTasks from './pages/EditTasks'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {
  const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : [];
});

  useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id, updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      )
    );
  };


  return (
    <>
      <Routes>
        <Route path='/' element={
        <>
          <Hero/>
        </>

        }/>

        <Route path='/all-tasks' element={<AllTasks tasks={tasks} deleteTask={deleteTask}/>}/>
        <Route path='/new-tasks' element={<NewTasks addTask={addTask}/>}/>
        <Route path='/edit-task/:id' element={<EditTasks tasks={tasks} updateTask={updateTask}/>}/>

      </Routes>
    </>
  )
}

export default App
