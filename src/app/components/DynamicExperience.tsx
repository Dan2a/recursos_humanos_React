import { MousePointer2, Sparkles, TrendingUp, Users2, BrainCircuit } from 'lucide-react';

export function DynamicExperience() {
  const highlights = [
    {
      icon: BrainCircuit,
      title: "Inteligência Predictiva",
      text: "Antecipe saídas e identifique talentos com nossa IA de análise de comportamento.",
      accent: "border-l-[#F08832]"
    },
    {
      icon: Sparkles,
      title: "Experiência do Colaborador",
      text: "Uma interface tão simples que seus funcionários vão amar usar o RH.",
      accent: "border-l-blue-500"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Lado Esquerdo: Composição Visual Criativa */}
          <div className="relative order-2 lg:order-1">
            {/* Círculo de Luz de Fundo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-100/40 rounded-full blur-[100px] -z-10" />

            <div className="relative grid grid-cols-12 gap-4">
              {/* Card Principal (Simulando Dashboard) */}
              <div className="col-span-10 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="h-4 w-32 bg-gray-100 rounded-full" />
                </div>
                <div className="space-y-4">
                  <div className="h-8 w-full bg-gray-50 rounded-lg animate-pulse" />
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-20 bg-orange-50 rounded-xl flex flex-col items-center justify-center border border-orange-100">
                       <Users2 className="w-6 h-6 text-[#F08832] mb-1" />
                       <div className="h-2 w-10 bg-[#F08832]/20 rounded" />
                    </div>
                    <div className="h-20 bg-blue-50 rounded-xl border border-blue-100" />
                    <div className="h-20 bg-gray-50 rounded-xl border border-gray-100" />
                  </div>
                  <div className="h-32 w-full bg-gray-900 rounded-xl flex items-center justify-center">
                     <TrendingUp className="text-white/20 w-12 h-12" />
                  </div>
                </div>
              </div>

              {/* Card Flutuante 1: Notificação */}
              <div className="absolute -top-6 -right-4 md:right-0 bg-white p-4 rounded-xl shadow-xl border border-gray-50 flex items-center gap-4 animate-bounce-slow">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Sparkles className="text-green-600 w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500">Novo Onboarding</p>
                  <p className="text-sm font-bold text-gray-900">Ana Silva contratada!</p>
                </div>
              </div>

              {/* Card Flutuante 2: Performance */}
              <div className="absolute -bottom-10 right-10 bg-[#F08832] p-5 rounded-2xl shadow-2xl text-white transform rotate-3 hover:rotate-0 transition-all">
                <div className="flex items-center gap-3">
                  <MousePointer2 className="w-5 h-5 fill-white" />
                  <span className="font-bold">Aprovar Férias?</span>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito: Conteúdo Estratégico */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[#F08832] text-sm font-bold mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Inovação em Gestão</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
              A tecnologia que <span className="relative inline-block">
                humaniza
                <span className="absolute bottom-1 left-0 w-full h-3 bg-[#F08832]/20 -z-10" />
              </span> o seu RH.
            </h2>

            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              O futuro do trabalho não é sobre planilhas, é sobre pessoas. Nossa plataforma 
              elimina o trabalho braçal para que sua equipe tenha tempo de fazer o que realmente importa: 
              cuidar de quem faz a empresa acontecer.
            </p>

            <div className="space-y-6">
              {highlights.map((h, i) => (
                <div key={i} className={`p-6 bg-white rounded-2xl border border-gray-100 border-l-4 ${h.accent} shadow-sm hover:shadow-md transition-shadow`}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <h.icon className="w-6 h-6 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{h.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{h.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <button className="bg-[#F08832] text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all shadow-lg shadow-orange-200">
                Começar agora grátis
              </button>
              <button className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all">
                Ver vídeo demo
              </button>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}