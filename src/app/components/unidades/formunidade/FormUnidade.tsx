import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import Unidade from "../../../../models/Unidade";
import { AuthContext } from "../../../../contexts/AuthContext";
import { atualizar, buscar, cadastrar } from "../../../../services/Service";
import { Building2, ArrowLeft, User, Lock, Camera } from "lucide-react";

function FormUnidade() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const { unidade: authUnidade } = useContext(AuthContext);
    const token = authUnidade.token;

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [unidadeData, setUnidadeData] = useState<Unidade>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '', 
        foto: ''
    } as Unidade);

    const headerConfig = {
        headers: { Authorization: token.startsWith("Bearer") ? token : `Bearer ${token}` }
    };

    useEffect(() => {
        async function carregarDados() {
            if (id !== undefined) {
                try {
                    await buscar(`/unidades/${id}`, (dados: Unidade) => {
                        setUnidadeData({
                            ...dados,
                            senha: '' // Limpamos o campo de senha para o usuário não ver o hash
                        });
                    }, headerConfig);
                } catch (error: any) {
                    console.error("Erro na busca:", error);
                }
            }
        }
        carregarDados();
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUnidadeData({ ...unidadeData, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        try {
            if (id !== undefined) {
                // Na Edição: Se a senha estiver vazia, o Service do Back-end manterá a antiga
                await atualizar(`/unidades/atualizar`, unidadeData, setUnidadeData, headerConfig);
                alert('Unidade atualizada com sucesso!');
            } else {
                // No Cadastro: Aqui a senha é obrigatória
                await cadastrar(`/unidades/cadastrar`, unidadeData, setUnidadeData, headerConfig);
                alert('Unidade cadastrada com sucesso!');
            }
            navigate("/unidades");
        } catch (error: any) {
            const msg = error.response?.data?.message;
            alert(`Erro: ${Array.isArray(msg) ? msg.join(", ") : msg || "Verifique os dados"}`);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="max-w-4xl mx-auto p-4 py-8">
            <div className="flex items-center gap-4 mb-6">
                <button onClick={() => navigate("/unidades")} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                    <ArrowLeft size={24} />
                </button>
                
                {/* Logo Dinâmico no Cabeçalho */}
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center overflow-hidden border-2 border-white shadow-sm">
                    {unidadeData.foto ? (
                        <img src={unidadeData.foto} alt="Logo" className="w-full h-full object-cover" />
                    ) : (
                        <span className="text-white font-bold">PF</span>
                    )}
                </div>

                <h1 className="text-3xl font-bold text-[#19439E]">
                    {id ? 'Editar Unidade' : 'Nova Unidade'}
                </h1>
            </div>

            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Nome */}
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                            <Building2 size={18} className="text-[#F08832]" /> Nome da Unidade
                        </label>
                        <input name="nome" className="w-full border border-gray-200 rounded-xl p-3.5 outline-none focus:ring-2 focus:ring-[#F08832]" 
                               value={unidadeData.nome} onChange={atualizarEstado} required />
                    </div>

                    {/* Usuário */}
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                            <User size={18} className="text-[#F08832]" /> Usuário (E-mail)
                        </label>
                        <input name="usuario" className="w-full border border-gray-200 rounded-xl p-3.5 outline-none focus:ring-2 focus:ring-[#F08832]" 
                               value={unidadeData.usuario} onChange={atualizarEstado} required />
                    </div>

                    {/* Senha - O segredo está no placeholder e no required dinâmico */}
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                            <Lock size={18} className="text-[#F08832]" /> {id ? 'Alterar Senha' : 'Senha'}
                        </label>
                        <input 
                            name="senha" 
                            type="password"
                            className="w-full border border-gray-200 rounded-xl p-3.5 outline-none focus:ring-2 focus:ring-[#F08832]" 
                            value={unidadeData.senha} 
                            onChange={atualizarEstado} 
                            required={!id} // Obrigatório apenas se NÃO houver ID (cadastro novo)
                            placeholder={id ? "Deixe em branco para manter a atual" : "Digite a senha"}
                        />
                    </div>

                    {/* Foto */}
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                            <Camera size={18} className="text-[#F08832]" /> URL da Foto/Logo
                        </label>
                        <input name="foto" className="w-full border border-gray-200 rounded-xl p-3.5 outline-none focus:ring-2 focus:ring-[#F08832]" 
                               value={unidadeData.foto} onChange={atualizarEstado} />
                    </div>

                    <div className="pt-4 flex gap-4">
                        <button type="submit" disabled={isLoading} className="flex-1 bg-[#F08832] hover:bg-[#d97728] text-white font-bold py-3.5 rounded-xl shadow-lg transition-all flex justify-center items-center">
                            {isLoading ? <ClipLoader size={20} color="#fff" /> : "Confirmar"}
                        </button>
                        <button type="button" onClick={() => navigate("/unidades")} className="px-8 py-3.5 text-gray-500 font-bold hover:bg-gray-100 rounded-xl transition-all">
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormUnidade;