import { Check } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardHeader } from "@/app/components/ui/card";

export function Plans() {
  const plans = [
    {
      name: "Starter",
      price: "199",
      description: "Essencial para pequenas empresas e startups.",
      features: ["Até 15 colaboradores", "Gestão de Documentos", "Ponto Digital", "Suporte via Chat"],
      popular: false
    },
    {
      name: "Professional",
      price: "499",
      description: "A solução completa para empresas em crescimento.",
      features: ["Até 100 colaboradores", "Módulo de Férias", "Relatórios Avançados", "Integração Contábil", "Suporte Premium"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Recursos sob medida para grandes operações.",
      features: ["Colaboradores Ilimitados", "API Aberta", "Gerente de Conta Dedicado", "Treinamento Presencial"],
      popular: false
    }
  ];

  return (
    <section className="pt-32 pb-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Planos que crescem com você</h2>
          <p className="text-gray-600 text-lg">Transparência total, sem taxas escondidas.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <Card key={i} className={`relative overflow-hidden transition-all hover:shadow-xl ${plan.popular ? 'border-[#F08832] ring-2 ring-[#F08832]/10' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[#F08832] text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                  MAIS ESCOLHIDO
                </div>
              )}
              <CardHeader className="p-8 pb-0 text-center">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-center justify-center gap-1 mb-4">
                  <span className="text-gray-500 text-lg">R$</span>
                  <span className="text-5xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-gray-500">/mês</span>}
                </div>
                <p className="text-sm text-gray-600">{plan.description}</p>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-gray-700">
                      <Check className="w-5 h-5 text-[#F08832]" /> {feature}
                    </li>
                  ))}
                </ul>
                <Button className={`w-full py-6 text-lg ${plan.popular ? 'bg-[#F08832] hover:bg-[#d97728]' : 'bg-gray-900 hover:bg-black'}`}>
                  {plan.price === "Custom" ? "Falar com Vendas" : "Começar Agora"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}