const benefitsList = [
  "Quer se conhecer melhor e entender suas emoções",
  "Busca equilíbrio entre as demandas da vida e o cuidado consigo",
  "Deseja aprender a colocar limites saudáveis",
  "Precisa de um espaço seguro para processar experiências difíceis",
  "Quer construir uma relação mais gentil consigo mesma",
  "Está em busca de autoconhecimento e crescimento emocional"
];

const WhoIsForSection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
            Para quem é a psicoterapia
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A terapia é para mulheres que desejam cuidar de si com profundidade e autenticidade.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-5">
          {benefitsList.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 p-5 rounded-2xl bg-accent/30 border border-border/30"
            >
              <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
              <span className="text-foreground/90 font-light">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsForSection;
