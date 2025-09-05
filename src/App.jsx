import { useState } from "react";
import { Tasks } from "./components/Tasks";
import { AddTasks } from "./components/AddTasks";

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      completed: false,
    },
    {
      id: 2,
      title: "Estudar TypeScript",
      completed: false,
    },
    {
      id: 3,
      title: "Estudar JavaScript",
      completed: false,
    },
  ]);

  function addTask(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      completed: false
    }
    setTasks([...tasks, newTask])
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
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4" >
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciamento de Tarefas
        </h1>

        <AddTasks addTask={addTask} />
        <Tasks tasks={tasks} onChecked={onChecked} onDelete={onDelete} />
      </div>
    </div>
  );
}


// adicionar rotas com o react router-dom
// criar uma pagina de detalhes da tarefa
// criar uma pagina de editar tarefa
// criar uma pagina de listar tarefas completadas
// criar uma pagina de listar tarefas pendentes
// criar uma pagina de listar todas as tarefas