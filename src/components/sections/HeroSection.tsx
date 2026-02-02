import WhatsAppButton from "../WhatsAppButton";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, hsl(195 30% 25%) 0%, transparent 60%)"
        }}
      />
      
      <div className="container-narrow text-center relative z-10 py-20">
        <div className="animate-fade-in-up">
          {/* Decorative element */}
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-12" />
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-8 text-foreground">
            Um espaço seguro para você{" "}
            <span className="italic text-cream-soft">respirar</span>,{" "}
            <span className="italic text-cream-soft">sentir</span> e{" "}
            <span className="italic text-cream-soft">se reencontrar</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Psicoterapia para mulheres adultas que buscam acolhimento, 
            escuta genuína e um caminho de cuidado consigo mesmas.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <WhatsAppButton>
              Conversar no WhatsApp
            </WhatsAppButton>
          </div>
          
          <p className="text-sm text-muted-foreground/70 font-light tracking-wide">
            Online • Presencial em Piracicaba
          </p>
        </div>
      </div>

      {/* Bottom fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(to top, hsl(195 35% 15%) 0%, transparent 100%)"
        }}
      />
    </section>
  );
};

export default HeroSection;
