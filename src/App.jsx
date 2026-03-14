import { useContext, useEffect, useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import AllTasks from './pages/AllTasks'
import NewTasks from './pages/NewTasks'
import EditTasks from './pages/EditTasks'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ProtectedRoute from './components/ProtectedRoute'
import AuthRedirect from './components/AuthRedirect'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import { AuthContext } from './context/AuthContext'



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
        
        <Route path='/profile' element={<ProtectedRoute><Hero/></ProtectedRoute>}/>
        <Route path='/signup' element={<AuthRedirect><SignUp/></AuthRedirect>}/>
        <Route path='/login' element={<AuthRedirect><Login/></AuthRedirect>}/>
        <Route path='/profile/all-tasks' element={<ProtectedRoute><AllTasks tasks={tasks} deleteTask={deleteTask}/></ProtectedRoute>}/>
        <Route path='/profile/new-tasks' element={<ProtectedRoute><NewTasks addTask={addTask}/></ProtectedRoute>}/>
        <Route path='/profile/edit-task/:id' element={<ProtectedRoute><EditTasks tasks={tasks} updateTask={updateTask}/></ProtectedRoute>}/>

      </Routes>
    </>
  )
}

export default App
