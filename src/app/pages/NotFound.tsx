import { FileQuestion, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="w-24 h-24 bg-orange-100 rounded-2xl flex items-center justify-center mb-8">
        <FileQuestion className="w-12 h-12 text-[#F08832]" />
      </div>
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Página não encontrada</h2>
      <p className="text-gray-600 mb-8 max-w-md">Parece que este caminho não existe no nosso sistema.</p>
      <Link to="/" className="bg-[#F08832] text-white px-8 py-3 rounded-lg hover:bg-[#d97728] flex items-center gap-2">
        <Home className="w-5 h-5" /> Voltar ao Início
      </Link>
    </div>
  );
}