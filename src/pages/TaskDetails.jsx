import { useParams, Link } from "react-router-dom";

export function TaskDetails({ tasks }) {
    const { id } = useParams();
    const task = tasks.find(t => t.id === id);

    if (!task) {
        return (
            <div className="bg-slate-800 p-6 rounded-lg text-center">
                <h2 className="text-xl font-bold text-red-400">Tarefa não encontrada!</h2>
                <Link to="/" className="mt-4 inline-block text-[#0FFCBE] hover:underline">
                    Voltar para a lista
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-slate-800 p-6 rounded-lg text-slate-200 space-y-4">
            <h2 className="text-2xl font-bold text-[#0FFCBE]">{task.title}</h2>
            <p className="text-lg text-slate-300">
                {task.description || "Esta tarefa não possui descrição."}
            </p>
            <div className="border-t border-slate-700 pt-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${task.completed
                    ? 'bg-blue-600 text-blue-100'
                    : 'bg-yellow-600 text-yellow-100'
                    }`}>
                    {task.completed ? "Completada" : "Pendente"}
                </span>
            </div>
            <Link to="/" className="mt-4 inline-block text-[#0FFCBE] hover:underline">
                &larr; Voltar para a lista
            </Link>
        </div>
    );
}