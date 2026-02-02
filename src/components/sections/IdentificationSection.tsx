const identificationPoints = [
  "Você sente que está sempre cuidando de tudo e de todos, menos de você",
  "Carrega uma exaustão que ninguém vê, mas que pesa todos os dias",
  "Se cobra demais e nunca se sente boa o suficiente",
  "Tem dificuldade de pedir ajuda ou de mostrar vulnerabilidade",
  "Sente ansiedade, angústia ou um vazio difícil de explicar",
  "Precisa de um espaço só seu, sem julgamentos"
];

const IdentificationSection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="card-soft rounded-3xl p-8 md:p-12 lg:p-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-center mb-4">
            Talvez você se reconheça aqui
          </h2>
          
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Se algumas dessas frases fazem sentido para você, saiba que não está sozinha.
          </p>
          
          <ul className="space-y-5 max-w-2xl mx-auto">
            {identificationPoints.map((point, index) => (
              <li 
                key={index}
                className="flex items-start gap-4 text-foreground/90"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                <span className="text-lg font-light leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-12 pt-8 border-t border-border/30">
            <p className="text-center text-xl font-serif italic text-cream-soft">
              "Você não precisa passar por isso sozinha."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdentificationSection;
