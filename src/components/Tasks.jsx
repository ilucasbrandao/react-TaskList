import { TaskItem } from "./TaskItem";

export function Tasks({ tasks, onChecked, onDelete }) {
    if (tasks.length === 0) {
        return <p className="text-center text-slate-300">Nenhuma tarefa encontrada.</p>;
    }

    return (
        <div className="space-y-3">
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onChecked={onChecked}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}