import { MessageCircle } from "lucide-react";
import { ShimmerButton } from "./ui/shimmer-button";

interface WhatsAppButtonProps {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
}

const WhatsAppButton = ({
  variant = "primary",
  children,
  className = "",
}: WhatsAppButtonProps) => {
  const whatsappNumber = "5511963072646";
  const message = encodeURIComponent(
    "Olá, gostaria de saber mais sobre a psicoterapia.",
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  const openWhatsApp = () => {
    window.open(whatsappLink, "_blank");
  }

  if (variant === "secondary") {
    return (
      <ShimmerButton>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-primary/30 text-primary font-medium transition-all duration-300 hover:bg-primary/10 hover:border-primary/50 ${className}`}
        >
          <MessageCircle className="w-5 h-5" />
          {children}
        </a>
      </ShimmerButton>
    );
  }

  return (
    <ShimmerButton onClick={openWhatsApp} shimmerSize="0.1em" background="var(--gold)" className="bg-gold gap-3 px-8 py-4 rounded-2xl font-medium text-lg text-primary-foreground">
      {/* <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`bg-gold inline-flex w-full items-center gap-3 px-8 py-4 rounded-2xl font-medium text-lg text-primary-foreground ${className}`}
      > */}
        <MessageCircle className="w-5 h-5" />
        {children}
      {/* </a> */}
    </ShimmerButton>
  );
};

export default WhatsAppButton;
