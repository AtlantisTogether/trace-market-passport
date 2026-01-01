import { MessageSquare, BarChart3, FileText, QrCode } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Chat with AI",
    description: "Share your production and supply chain data through our conversational AI. Upload PDFs, describe processes, or import existing data.",
    color: "primary" as const,
  },
  {
    icon: BarChart3,
    step: "02",
    title: "Generate LCA",
    description: "Our AI calculates your Life-Cycle Assessment using open-source emission databases, validated with industry benchmarks.",
    color: "teal" as const,
  },
  {
    icon: FileText,
    step: "03",
    title: "Create EPD",
    description: "Receive your Environmental Product Declaration following ISO 14025 standards, ready for regulatory compliance.",
    color: "accent" as const,
  },
  {
    icon: QrCode,
    step: "04",
    title: "Publish DPP",
    description: "Get your embeddable Digital Product Passport with interactive maps, certifications, and full supply chain transparency.",
    color: "primary" as const,
  },
];

const colorStyles = {
  primary: {
    bg: "bg-primary/10",
    text: "text-primary",
    border: "border-primary/20",
    line: "bg-primary/30",
  },
  teal: {
    bg: "bg-teal/10",
    text: "text-teal",
    border: "border-teal/20",
    line: "bg-teal/30",
  },
  accent: {
    bg: "bg-accent/20",
    text: "text-accent-foreground",
    border: "border-accent/30",
    line: "bg-accent/40",
  },
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            From Data to Digital Passport in Minutes
          </h2>
          <p className="text-lg text-muted-foreground">
            Our AI-powered platform guides you through the entire process, making sustainability reporting accessible to everyone.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/20 via-teal/20 to-accent/30" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const styles = colorStyles[step.color];
              const Icon = step.icon;
              
              return (
                <div
                  key={step.step}
                  className="relative group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Step card */}
                  <div className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg h-full">
                    {/* Step number */}
                    <span className={`absolute -top-3 -right-3 w-8 h-8 rounded-full ${styles.bg} ${styles.text} text-sm font-bold flex items-center justify-center border-2 border-background`}>
                      {step.step}
                    </span>

                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl ${styles.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-7 h-7 ${styles.text}`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Mobile connector */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <div className={`w-0.5 h-8 ${styles.line}`} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
