import { useState } from "react";

export function AddTasks({ addTask }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // Usar um handler de 'submit' é melhor para formulários.
    // Isso permite submeter o formulário pressionando 'Enter' no input.
    function handleSubmit(e) {
        e.preventDefault(); // Impede que a página recarregue

        // Validação: Apenas o título é obrigatório.
        if (!title.trim()) {
            return alert("O título da tarefa é obrigatório");
        }

        addTask(title, description);
        setTitle('');
        setDescription('');
    }

    return (
        // Trocado 'div' por 'form' e 'onClick' por 'onSubmit'
        <form
            onSubmit={handleSubmit}
            className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col"
        >
            <input
                type="text"
                placeholder="Adicionar Tarefa"
                className="border border-slate-300 outline-slate-400 py-2 w-full p-2 rounded-md"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Descrição da Tarefa (Opcional)"
                className="border border-slate-300 outline-slate-400 py-2 w-full p-2 rounded-md"
                value={description}
                // Corrigido: 'onChange' é o padrão, 'onChangeCapture' é raramente usado.
                onChange={(e) => setDescription(e.target.value)}
            />
            {/* Adicionado type="submit" ao botão */}
            <button
                type="submit"
                className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium hover:bg-slate-600 transition-colors"
            >
                Adicionar
            </button>
        </form>
    );
}