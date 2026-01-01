import { Utensils, Shirt, Cpu, Factory, Grape, Pill, Building2, Car } from "lucide-react";

const industries = [
  { icon: Utensils, name: "Food & Beverage", description: "Nutritional data, ingredients, allergens" },
  { icon: Shirt, name: "Fashion & Textiles", description: "Materials, dyes, certifications" },
  { icon: Cpu, name: "Electronics", description: "Components, metals, recyclability" },
  { icon: Factory, name: "Manufacturing", description: "Raw materials, assembly, energy" },
  { icon: Grape, name: "Agriculture", description: "Farming methods, origins, pesticides" },
  { icon: Pill, name: "Pharmaceuticals", description: "Compounds, packaging, compliance" },
  { icon: Building2, name: "Construction", description: "Building materials, embodied carbon" },
  { icon: Car, name: "Automotive", description: "Parts origin, materials, emissions" },
];

const Industries = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-teal/10 text-teal text-sm font-medium mb-4">
            Industries
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Built for Every Industry
          </h2>
          <p className="text-lg text-muted-foreground">
            Sector-specific data collection and metrics tailored to your industry's unique requirements.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.name}
                className="group p-5 rounded-2xl bg-card border border-border hover:border-teal/30 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-teal/10 flex items-center justify-center mb-4 group-hover:bg-teal/20 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7 text-teal" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {industry.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
