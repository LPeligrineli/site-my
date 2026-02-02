const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container-narrow">
        <div className="flex flex-col items-center text-center">
          <p className="text-muted-foreground/60 text-sm font-light">
            © {new Date().getFullYear()} • Psicóloga • CRP 06/127280
          </p>
          <p className="text-muted-foreground/40 text-xs mt-2">
            Piracicaba • Atendimento Online e Presencial
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
