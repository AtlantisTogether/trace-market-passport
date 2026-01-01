import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, BarChart3, FileCheck } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden gradient-hero">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-up">
            <Leaf className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-secondary-foreground">
              Sustainability made transparent
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up delay-100">
            Transform Your Supply Chain Into a{" "}
            <span className="text-primary">Digital Product Passport</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up delay-200">
            Generate official Environmental Product Declarations and embeddable Digital Product Passports 
            through our AI-powered platform. No expertise required.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up delay-300">
            <Button variant="hero" size="xl">
              Start Free Assessment
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              See Demo DPP
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-up delay-400">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                <BarChart3 className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground text-sm">AI-Powered LCA</p>
                <p className="text-xs text-muted-foreground">Automated calculations</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-teal/10">
                <FileCheck className="w-5 h-5 text-teal" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground text-sm">Official EPD</p>
                <p className="text-xs text-muted-foreground">ISO 14025 compliant</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/20">
                <Leaf className="w-5 h-5 text-accent-foreground" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground text-sm">Embeddable DPP</p>
                <p className="text-xs text-muted-foreground">Share anywhere</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
