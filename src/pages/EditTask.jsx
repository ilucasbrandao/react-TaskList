import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export function EditTask({ tasks, editTask }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    useEffect(() => {
        const taskToEdit = tasks.find(t => t.id === id);
        if (taskToEdit) {
            setTitle(taskToEdit.title);
            setDescription(taskToEdit.description || "");
        } else {

            navigate("/");
        }
    }, [id, tasks, navigate]);

    function handleSubmit(e) {
        e.preventDefault();
        if (!title) return;

        editTask(id, title, description);
        navigate("/");
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-slate-800 p-6 rounded-lg space-y-4"
        >
            <h2 className="text-2xl font-bold text-[#0FFCBE]">Editar Tarefa</h2>

            <div>
                <label htmlFor="title" className="block text-sm font-medium text-slate-300 mb-1">
                    Título
                </label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-700 text-slate-200 rounded-md border border-slate-600 focus:outline-none focus:ring-2 focus:ring-[#0FFCBE]"
                />
            </div>

            <div>
                <label htmlFor="description" className="block text-sm font-medium text-slate-300 mb-1">
                    Descrição (Opcional)
                </label>
                <textarea
                    id="description"
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-700 text-slate-200 rounded-md border border-slate-600 focus:outline-none focus:ring-2 focus:ring-[#0FFCBE]"
                />
            </div>

            <div className="flex gap-4">
                <button
                    type="submit"
                    className="flex-1 py-2 px-4 bg-[#0FFCBE] text-slate-900 font-bold rounded-md hover:bg-opacity-80 transition-colors"
                >
                    Salvar Alterações
                </button>
                <button
                    type="button"
                    onClick={() => navigate("/")}
                    className="flex-1 py-2 px-4 bg-slate-600 text-slate-200 font-bold rounded-md hover:bg-slate-500 transition-colors"
                >
                    Cancelar
                </button>
            </div>
        </form>
    );
}