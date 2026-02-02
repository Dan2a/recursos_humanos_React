import { Link } from 'react-router-dom';
import Unidade from '../../../../models/Unidade';
import { MapPin, Edit3, Trash2, Globe } from 'lucide-react'; 

interface CardUnidadeProps {
    unidade: Unidade;
}

function CardUnidade({ unidade }: CardUnidadeProps) {
    return (
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full">
            <div className="h-32 bg-[#19439E]/5 flex items-center justify-center relative">
                {unidade.foto ? (
                    <img src={unidade.foto} alt={unidade.nome} className="w-full h-full object-cover" />
                ) : (
                    <Globe size={48} className="text-[#19439E]/20" />
                )}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-[10px] font-bold text-[#19439E]">
                    ID: {unidade.id}
                </div>
            </div>

            <div className="p-5 flex-grow">
                <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#F08832]/10 rounded-lg shrink-0">
                        <MapPin size={20} className="text-[#F08832]" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 leading-tight">{unidade.nome}</h3>
                        <p className="text-sm text-gray-500 font-medium">@{unidade.usuario}</p>
                    </div>
                </div>
            </div>

            <div className="flex border-t border-gray-50">
                {/* ROTA CORRIGIDA AQUI */}
                <Link
                    to={`/unidades/atualizar/${unidade.id}`}
                    className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-bold text-gray-600 hover:bg-gray-50 hover:text-[#19439E] transition-colors border-r border-gray-50"
                >
                    <Edit3 size={16} />
                    Editar
                </Link>

                {/* ROTA CORRIGIDA AQUI */}
                <Link
                    to={`/unidades/${unidade.id}`}
                    className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-bold text-gray-400 hover:bg-red-50 hover:text-red-600 transition-colors"
                >
                    <Trash2 size={16} />
                    Excluir
                </Link>
            </div>
        </div>
    );
}
export default CardUnidade;