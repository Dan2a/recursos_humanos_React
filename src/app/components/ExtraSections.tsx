import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/app/components/ui/accordion";

export function FAQSection() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Dúvidas Frequentes</h2>
          <p className="text-gray-600 mt-4">Tudo o que você precisa saber sobre o Sistema RH.</p>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="bg-white px-6 rounded-xl border">
            <AccordionTrigger className="hover:no-underline font-semibold text-left">
              O sistema está adequado à LGPD?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Sim, nossa plataforma utiliza criptografia de ponta a ponta e segue rigorosamente todos os protocolos da Lei Geral de Proteção de Dados para garantir a privacidade dos seus colaboradores.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-white px-6 rounded-xl border">
            <AccordionTrigger className="hover:no-underline font-semibold text-left">
              Como funciona o suporte técnico?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Oferecemos suporte humano via chat e e-mail em todos os planos, com tempo médio de resposta de menos de 15 minutos em horário comercial.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-white px-6 rounded-xl border">
            <AccordionTrigger className="hover:no-underline font-semibold text-left">
              Posso testar antes de contratar?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Com certeza! Oferecemos uma demonstração gratuita de 14 dias com todas as funcionalidades liberadas para você sentir a diferença na prática.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}