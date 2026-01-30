import { Send, MessageCircle } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contato" className="relative py-24 px-6 bg-gradient-to-br from-white to-orange-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Conteúdo à esquerda */}
          <div>
            <div className="inline-block px-4 py-2 bg-[#F08832]/10 rounded-full mb-4">
              <span className="text-[#F08832] font-medium text-sm">Fale Conosco</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Vamos transformar o RH da sua empresa?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Entre em contato conosco e descubra como nosso sistema pode revolucionar a gestão de pessoas na sua organização.
            </p>

            {/* Informações de contato */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-[#F08832]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-[#F08832]" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Suporte Rápido</p>
                  <p className="text-sm text-gray-600">Resposta em até 24 horas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário à direita */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Envie sua mensagem</h3>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F08832] focus:ring-2 focus:ring-[#F08832]/20 outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F08832] focus:ring-2 focus:ring-[#F08832]/20 outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F08832] focus:ring-2 focus:ring-[#F08832]/20 outline-none transition-all"
                  placeholder="Nome da empresa"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F08832] focus:ring-2 focus:ring-[#F08832]/20 outline-none transition-all resize-none"
                  placeholder="Como podemos ajudar?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#F08832] text-white px-6 py-4 rounded-lg hover:bg-[#d97728] transition-all duration-300 font-medium flex items-center justify-center gap-2 shadow-lg shadow-[#F08832]/25 hover:shadow-xl hover:shadow-[#F08832]/30"
              >
                Enviar Mensagem
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
