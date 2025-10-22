import { Tasks } from "../components/Tasks";

export function CompletedTasks({ tasks, onChecked, onDelete }) {
    const completedTasks = tasks.filter(task => task.completed);

    return (
        <Tasks
            tasks={completedTasks}
            onChecked={onChecked}
            onDelete={onDelete}
        />
    );
}