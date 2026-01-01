import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Free",
    description: "Perfect for exploring and generating your first assessments",
    price: "0",
    period: "",
    features: [
      "Unlimited LCA calculations",
      "AI chatbot data collection",
      "PDF document parsing",
      "EPD generation & download",
      "DPP preview (watermarked)",
    ],
    cta: "Start Free",
    variant: "heroOutline" as const,
    popular: false,
  },
  {
    name: "Pro",
    description: "For businesses ready to publish and share their sustainability story",
    price: "49",
    period: "/month",
    features: [
      "Everything in Free",
      "Active DPP pages (no watermark)",
      "Custom company branding",
      "Embed codes & QR codes",
      "Analytics dashboard",
      "Multi-language DPP",
      "Priority support",
    ],
    cta: "Get Started",
    variant: "hero" as const,
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For organizations with multiple products and advanced needs",
    price: "Custom",
    period: "",
    features: [
      "Everything in Pro",
      "Unlimited products",
      "API access",
      "Custom integrations",
      "Dedicated account manager",
      "White-label options",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    variant: "heroOutline" as const,
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Generate unlimited assessments for free. Only pay when you're ready to publish.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "bg-card border-primary shadow-lg scale-[1.02]"
                  : "bg-card border-border hover:border-primary/30"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">
                  {plan.price === "Custom" ? "" : "€"}
                  {plan.price}
                </span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant={plan.variant} size="lg" className="w-full">
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          All plans include GDPR compliance and data security. No credit card required for Free plan.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
