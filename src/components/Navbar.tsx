import { ArrowRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", to: "/home" },
  { label: "Solutions", to: "/solutions" },
  { label: "Industries", to: "/industries" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary border-b-2 border-b-primary">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[80px]">
        <Link to="/home" className="flex items-center gap-2">
          <img src={logo} alt="AA Innovation" className="h-10 w-auto" decoding="async" width={120} height={40} fetchPriority="high" />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`relative text-sm tracking-wide transition-colors duration-200 py-2 ${
                location.pathname === link.to
                  ? "text-primary-foreground font-semibold"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              {link.label}
              {location.pathname === link.to && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" />
              )}
            </Link>
          ))}
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 text-sm font-semibold rounded-full hover:bg-primary/90 transition-colors ml-4"
          >
            Contact Us
            <ArrowRight size={14} />
          </Link>
        </div>

        <button className="md:hidden text-primary-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-secondary border-t border-primary/30 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block text-sm transition-colors ${
                location.pathname === link.to
                  ? "text-primary-foreground font-semibold"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 text-sm font-semibold rounded-full hover:bg-primary/90 transition-colors mt-2"
          >
            Contact Us
            <ArrowRight size={14} />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
