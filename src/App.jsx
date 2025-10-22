import { useState, useEffect } from "react"; // 1. Importe o useEffect
import { Routes, Route } from "react-router-dom";
import { Tasks } from "./components/Tasks";
import { AddTasks } from "./components/AddTasks";
import { Navigation } from "./components/Navigation";
import { TaskDetails } from "./pages/TaskDetails";
import { EditTask } from "./pages/EditTask";
import { PendingTasks } from "./pages/PendingTasks";
import { CompletedTasks } from "./pages/CompletedTasks";

// Chave para usar no localStorage
const LOCAL_STORAGE_KEY = "minhas-tarefas-app";

export default function App() {


  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedTasks) {
      return JSON.parse(savedTasks);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);


  function addTask(title, description) {
    const newTask = {
      id: crypto.randomUUID(),
      title,
      description,
      completed: false
    }
    setTasks([...tasks, newTask])
  }

  function editTask(id, newTitle, newDescription) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, title: newTitle, description: newDescription };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function onChecked(id) {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task, completed: !task.completed
        }
      }
      return task;
    });
    setTasks(newTasks)
  }

  function onDelete(id) {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks)
  }

  return (
    <div className="w-screen min-h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[700px] space-y-4" >
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciamento de Tarefas
        </h1>

        <Navigation />

        <Routes>
          <Route path="/" element={<AddTasks addTask={addTask} />} />
          <Route path="/pending" element={<AddTasks addTask={addTask} />} />
          <Route path="/completed" element={<AddTasks addTask={addTask} />} />
        </Routes>

        <Routes>
          <Route
            path="/"
            element={<Tasks tasks={tasks} onChecked={onChecked} onDelete={onDelete} />}
          />

          <Route
            path="/pending"
            element={<PendingTasks tasks={tasks} onChecked={onChecked} onDelete={onDelete} />}
          />

          <Route
            path="/completed"
            element={<CompletedTasks tasks={tasks} onChecked={onChecked} onDelete={onDelete} />}
          />

          <Route path="/task/:id" element={<TaskDetails tasks={tasks} />} />

          <Route path="/edit/:id" element={<EditTask tasks={tasks} editTask={editTask} />} />
        </Routes>
      </div>
    </div>
  );
}