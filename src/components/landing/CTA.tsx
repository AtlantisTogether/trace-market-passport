import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 md:py-32 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            Ready to Make Your Supply Chain Transparent?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10">
            Join businesses already using Trace.Market to build trust with customers 
            and meet sustainability regulations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="xl" 
              className="bg-background text-foreground hover:bg-background/90 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-200"
            >
              Start Your Free Assessment
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="xl"
              className="text-primary-foreground border-2 border-primary-foreground/30 hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
