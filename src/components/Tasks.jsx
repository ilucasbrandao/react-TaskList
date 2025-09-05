import { ChevronRight, ChevronRightIcon, Trash } from "lucide-react";

export function Tasks({ tasks, onChecked, onDelete }) {

    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button
                        onClick={() => onChecked(task.id)}
                        className={`bg-slate-400 w-full text-white p-2 rounded-md ${task.completed ? "line-through" : ""
                            } text-left`}
                    >
                        {task.title}
                    </button>
                    <button className="bg-slate-400 p-2 rounded-md text-white">
                        <ChevronRightIcon />
                    </button>
                    <button
                        onClick={() => onDelete(task.id)}
                        className={`bg-slate-400 p-2 rounded-md text-white`}
                    >
                        <Trash />
                    </button>
                </li>
            ))}
        </ul>
    );
}
