const trustPoints = [
  {
    title: "Ética profissional",
    description: "Atendimento regido pelo Código de Ética do Psicólogo, com compromisso total com seu bem-estar."
  },
  {
    title: "Sigilo absoluto",
    description: "Tudo o que você compartilha é confidencial. Seu espaço de fala é sagrado e protegido."
  },
  {
    title: "Sem pressão",
    description: "Aqui não existe cobrança por resultados rápidos. Cada processo tem seu próprio ritmo."
  },
  {
    title: "Segurança emocional",
    description: "Um ambiente onde você pode ser vulnerável sem medo de julgamento ou exposição."
  }
];

const TrustSection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="card-soft rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
              Um espaço de confiança
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Seu cuidado emocional é tratado com o respeito e a seriedade que merece.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {trustPoints.map((point, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-background/30 border border-border/20"
              >
                <h3 className="text-lg font-serif font-medium text-primary mb-2">
                  {point.title}
                </h3>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
