import { Target, Eye, Shield, Users, Sparkles, Lightbulb, Heart } from 'lucide-react';

export function MissionVisionValues() {
  const values = [
    { icon: Shield, label: 'Ética' },
    { icon: Users, label: 'Colaboração' },
    { icon: Sparkles, label: 'Simplicidade' },
    { icon: Lightbulb, label: 'Inovação' },
    { icon: Heart, label: 'Foco no usuário' },
  ];

  return (
    <section id="sobre" className="relative w-full py-24 px-6 overflow-hidden bg-white">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-orange-50/20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#F08832]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Formas geométricas sutis */}
      <div className="absolute top-40 left-1/4 w-2 h-32 bg-[#F08832]/10 rotate-12" />
      <div className="absolute bottom-40 right-1/3 w-2 h-40 bg-blue-500/10 -rotate-12" />

      <div className="relative max-w-7xl mx-auto">
        {/* Título principal */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#F08832]/10 rounded-full mb-4">
            <span className="text-[#F08832] font-medium text-sm">Quem Somos</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Missão, Visão e Valores
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça os princípios que guiam nosso compromisso com a excelência em gestão de pessoas
          </p>
        </div>

        {/* Cards principais - Missão e Visão */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Card Missão */}
          <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#F08832]/20">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F08832] to-orange-400 rounded-t-2xl" />
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-14 h-14 bg-[#F08832]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Target className="w-7 h-7 text-[#F08832]" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">Missão</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Facilitar a gestão de pessoas e processos com uma interface clara e ferramentas que aceleram o trabalho de RH.
                </p>
              </div>
            </div>
          </div>

          {/* Card Visão */}
          <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-500/20">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-t-2xl" />
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-7 h-7 text-blue-500" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">Visão</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Ser reconhecido como um sistema de referência em soluções de Recursos Humanos para pequenas e médias equipes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card Valores */}
        <div className="relative bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F08832] via-blue-500 to-purple-500 rounded-t-2xl" />
          
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Nossos Valores</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="group flex flex-col items-center text-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F08832]/10 to-[#F08832]/5 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                    <Icon className="w-8 h-8 text-[#F08832]" strokeWidth={2} />
                  </div>
                  <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                    {value.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Linha decorativa final */}
        <div className="mt-16 flex items-center justify-center gap-2">
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#F08832]/30" />
          <div className="w-2 h-2 bg-[#F08832] rounded-full" />
          <div className="w-32 h-0.5 bg-[#F08832]/30" />
          <div className="w-2 h-2 bg-[#F08832] rounded-full" />
          <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#F08832]/30" />
        </div>
      </div>
    </section>
  );
}