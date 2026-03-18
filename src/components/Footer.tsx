import { Linkedin, Twitter, Mail, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const columns = [
    {
      title: "Industries",
      links: [
        { label: "Energy", to: "/industries" },
        { label: "Healthcare", to: "/industries" },
        { label: "Manufacturing", to: "/industries" },
        { label: "Finance", to: "/industries" },
        { label: "Consulting", to: "/industries" },
        { label: "Federal", to: "/industries" },
        { label: "Logistics", to: "/industries" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "AI & Automation", to: "/solutions" },
        { label: "Data Analytics", to: "/solutions" },
        { label: "Cloud Services", to: "/solutions" },
        { label: "Cybersecurity", to: "/solutions" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", to: "/about" },
        { label: "Case Studies", to: "/case-studies" },
        { label: "Contact", to: "/" },
      ],
    },
  ];

  return (
    <footer className="bg-secondary border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <div className="mb-4">
              <img src={logo} alt="AA Innovation" className="h-10 w-auto mb-1" />
              <p className="text-horizon text-[10px] tracking-widest uppercase mt-1">Always Ahead.</p>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
              Empowering organizations through innovative technology solutions.
              Transforming challenges into competitive advantages.
            </p>
            <p className="text-muted-foreground text-sm mb-4">info@aainnovation.com</p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Facebook, Instagram, Mail].map((Icon, i) => (
                <a key={i} href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-foreground font-medium text-sm mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            © 2026 AA Innovation LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((link) => (
              <a key={link} href="#" className="text-muted-foreground text-xs hover:text-foreground transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
