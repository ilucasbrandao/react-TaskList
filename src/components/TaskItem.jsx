
import { Link } from "react-router-dom";
import { Check, Trash, Edit, Eye } from "lucide-react";

export function TaskItem({ task, onChecked, onDelete }) {
    return (
        <div className="flex items-center justify-between bg-slate-800 p-4 rounded-lg shadow-md">
            <div className="flex items-center gap-4">

                <button
                    onClick={() => onChecked(task.id)}
                    className={`w-6 h-6 rounded-full flex items-center justify-center border-2 
            ${task.completed ? 'bg-[#0FFCBE] border-[#0FFCBE]' : 'border-slate-400'}`}
                >
                    {task.completed && <Check size={16} className="text-slate-900" />}
                </button>

                <Link
                    to={`/task/${task.id}`}
                    className={`font-medium ${task.completed ? 'text-slate-500 line-through' : 'text-slate-200 hover:text-[#0FFCBE]'}`}
                >
                    {task.title}
                </Link>
            </div>

            <div className="flex items-center gap-3">

                <Link
                    to={`/task/${task.id}`}
                    className="text-slate-400 hover:text-blue-400"
                    title="Ver detalhes"
                >
                    <Eye size={18} />
                </Link>


                <Link
                    to={`/edit/${task.id}`}
                    className="text-slate-400 hover:text-yellow-400"
                    title="Editar"
                >
                    <Edit size={18} />
                </Link>


                <button
                    onClick={() => onDelete(task.id)}
                    className="text-slate-400 hover:text-red-400"
                    title="Excluir"
                >
                    <Trash size={18} />
                </button>
            </div>
        </div>
    );
}