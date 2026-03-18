import { ArrowRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Contact", to: "/" },
  { label: "Home", to: "/home" },
  { label: "Industries", to: "/industries" },
  { label: "Solutions", to: "/solutions" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-prussian border-b border-ocean/50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="AA Innovation" className="h-9 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`text-sm transition-colors duration-200 ${
                location.pathname === link.to
                  ? "text-primary-foreground font-medium"
                  : "text-sterling hover:text-primary-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="flex items-center gap-2 bg-horizon text-primary-foreground px-6 py-2.5 text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            Get Started
            <ArrowRight size={14} />
          </Link>
        </div>

        <button className="md:hidden text-primary-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-prussian border-t border-ocean/50 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-sterling hover:text-primary-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center gap-2 bg-horizon text-primary-foreground px-6 py-2.5 text-sm font-medium mt-2"
          >
            Get Started <ArrowRight size={14} />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
