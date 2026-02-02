import { MessageCircle, Video, Heart } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Primeiro contato",
    description: "Você me envia uma mensagem no WhatsApp. Conversamos de forma leve para entender suas necessidades."
  },
  {
    icon: Video,
    title: "Formato flexível",
    description: "Escolhemos juntas o formato ideal: online (de qualquer lugar) ou presencial no Piracicamirim."
  },
  {
    icon: Heart,
    title: "Acompanhamento contínuo",
    description: "Sessões regulares com cuidado, escuta e total confidencialidade. Cada passo no seu tempo."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
            Como funciona
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            O processo é simples e pensado para você se sentir confortável desde o primeiro momento.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="card-soft rounded-3xl p-8 text-center group"
            >
              {/* Step number */}
              <div className="text-sm text-primary/60 font-medium mb-6">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-accent/50 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-serif font-medium mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
