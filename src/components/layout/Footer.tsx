import { Leaf } from "lucide-react";
import logo from "@/assets/trace-market-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Demo DPP", href: "#" },
    ],
    Company: [
      { label: "About Us", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
    Resources: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Status", href: "#" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "GDPR", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2">
            <img src={logo} alt="Trace.Market" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/70 text-sm mb-4 max-w-xs">
              Making sustainability transparent. Generate Digital Product Passports and Environmental Product Declarations with AI.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/50">
              <Leaf className="w-4 h-4" />
              <span>Carbon-neutral platform</span>
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-primary-foreground mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {currentYear} Trace.Market. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">
              Twitter
            </a>
            <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
