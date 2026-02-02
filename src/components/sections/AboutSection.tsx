const AboutSection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Photo placeholder - elegant frame */}
          <div className="lg:col-span-2">
            <div className="aspect-[3/4] rounded-3xl bg-gradient-to-br from-petroleum-medium to-petroleum-light border border-border/30 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-muted-foreground/50">
                  <div className="w-20 h-20 rounded-full bg-accent/50 mx-auto mb-4" />
                  <span className="text-sm font-light">Sua foto aqui</span>
                </div>
              </div>
              {/* Decorative corner */}
              <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-primary/30 rounded-tl-xl" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-primary/30 rounded-br-xl" />
            </div>
          </div>
          
          {/* Bio content */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
              Sobre mim
            </h2>
            
            <div className="space-y-5 text-foreground/85 font-light leading-relaxed">
              <p>
                Olá, sou psicóloga clínica e meu trabalho é criar um espaço de acolhimento 
                genuíno para mulheres que buscam se reconectar consigo mesmas.
              </p>
              
              <p>
                Acredito que a terapia é um encontro humano, onde você pode ser exatamente 
                quem é, sem máscaras ou julgamentos. Cada mulher carrega sua própria história, 
                e meu papel é caminhar ao seu lado nesse processo de autoconhecimento.
              </p>
              
              <p>
                Meu atendimento é fundamentado em ética, respeito e confidencialidade. 
                Trabalho para que você se sinta segura para explorar suas emoções 
                e encontrar seus próprios caminhos.
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-border/30">
              <p className="text-sm text-muted-foreground">
                <span className="text-primary">CRP 06/127280</span> • Psicóloga Clínica
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
