import { useState } from "react";

export function AddTasks({ addTask }) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">

            <input type="text" placeholder="Adicionar Tarefa" className=
                "border border-slate-300 outline-slate-400 py-2 w-full p-2 rounded-md"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input type="text" placeholder="Descrição da Tarefa" className="
            border border-slate-300 outline-slate-400 py-2 w-full p-2 rounded-md"
                value={description}
                onChangeCapture={(e) => setDescription(e.target.value)}
            />
            <button onClick={() => {
                if (!title.trim() || !description.trim.trim()) {
                    return alert("Todos os campos são obrigatórios")
                }
                addTask(title, description);
                setTitle('');
                setDescription('');
            }}
                className="bg-slate-500 text-white px-4 py-2 rounded-md  font-medium"
            > Adicionar</button>
        </div >
    )
}