import { Tasks } from "../components/Tasks";

export function PendingTasks({ tasks, onChecked, onDelete }) {
    const pendingTasks = tasks.filter(task => !task.completed);

    return (
        <Tasks
            tasks={pendingTasks}
            onChecked={onChecked}
            onDelete={onDelete}
        />
    );
}