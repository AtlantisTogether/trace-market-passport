import { 
  Globe, 
  Shield, 
  Languages, 
  Layers, 
  Map, 
  FileBarChart,
  Upload,
  Sparkles
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Data Collection",
    description: "Our conversational AI guides you through data collection, understanding your processes and extracting key information automatically.",
  },
  {
    icon: Upload,
    title: "Document Parsing",
    description: "Upload supplier PDFs, certifications, and spreadsheets. Our AI extracts and organizes relevant sustainability data.",
  },
  {
    icon: Layers,
    title: "Sector-Specific Analysis",
    description: "From food to fashion to electronics - each industry gets tailored data fields and relevant environmental metrics.",
  },
  {
    icon: FileBarChart,
    title: "Open-Source LCA Database",
    description: "Calculations powered by EPA, IPCC, and academic emission factors, validated by AI against industry benchmarks.",
  },
  {
    icon: Map,
    title: "Interactive Supply Chain Map",
    description: "Visualize your entire supply chain on an interactive global map, showing origins and environmental impact of each component.",
  },
  {
    icon: Languages,
    title: "Multi-Language Support",
    description: "DPP pages automatically translate based on visitor preferences, making your sustainability story accessible globally.",
  },
  {
    icon: Shield,
    title: "ISO 14025 Compliant EPD",
    description: "Generate Environmental Product Declarations that meet international standards for regulatory compliance.",
  },
  {
    icon: Globe,
    title: "Embeddable Anywhere",
    description: "Get embed codes and QR codes to integrate your Digital Product Passport into your website, packaging, or marketing.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Everything You Need for Complete Transparency
          </h2>
          <p className="text-lg text-muted-foreground">
            Built for businesses of all sizes, across every industry. No sustainability expertise required.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
