import React from 'react'

function Holerite() {
    return (
        <div className="pt-32 pb-24 px-6 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-900 mb-10">{titulo}</h2>

                <div className="bg-gray-50 rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                    <table className="min-w-full text-sm">
                        <thead className="bg-gray-100 text-gray-600">
                            <tr>
                                <th className="px-6 py-4 text-left font-semibold">Nome</th>
                                <th className="px-6 py-4 text-left font-semibold">Cargo</th>
                                <th className="px-6 py-4 text-left font-semibold">Matrícula</th>
                                <th className="px-6 py-4 text-left font-semibold">Unidade</th>
                                <th className="px-6 py-4 text-center font-semibold">
                                    Holerith
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                            {colaboradores.length > 0 ? (
                                colaboradores.map((col) => (
                                    <tr key={col.id} className="hover:bg-white transition-colors">
                                        <td className="px-6 py-4 font-bold text-gray-900">
                                            {col.nome}
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">
                                            {col.cargo?.nome}
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">{col.matricula}</td>
                                        <td className="px-6 py-4 text-gray-600">
                                            {col.unidade?.nome}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <button
                                                onClick={() => gerarHolerith(col)}
                                                className="bg-[#F08832] hover:bg-[#d97728] text-white rounded-xl py-2 px-4 flex items-center gap-2 mx-auto transition-transform hover:scale-105"
                                            >
                                                <FileText className="w-4 h-4" />
                                                Gerar Holerith
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={5}
                                        className="px-6 py-10 text-center text-gray-400"
                                    >
                                        Nenhum colaborador encontrado para esta unidade.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Holerite