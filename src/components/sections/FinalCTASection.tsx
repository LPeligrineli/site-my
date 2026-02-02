import WhatsAppButton from "@/components/WhatsAppButton";

const FinalCTASection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto">
          {/* Decorative line */}
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-12" />
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-6 leading-tight">
            Pronta para dar o{" "}
            <span className="italic text-cream-soft">primeiro passo</span>?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 font-light leading-relaxed">
            Não precisa ter certeza de tudo. Você só precisa sentir que chegou o momento 
            de cuidar de você. Estou aqui para ouvir.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppButton>
              Conversar no WhatsApp
            </WhatsAppButton>
          </div>
          
          <p className="mt-10 text-sm text-muted-foreground/60 font-light">
            Responderei com carinho assim que possível.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
