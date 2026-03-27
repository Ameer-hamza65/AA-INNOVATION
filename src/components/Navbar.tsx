import { Menu, X, User, HelpCircle, Mail } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useCallback } from "react";
import Logo from "@/components/Logo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", to: "/", hash: "" },
  { label: "About Us", to: "/", hash: "#about" },
  { label: "Services", to: "/", hash: "#services" },
  { label: "Industries", to: "/", hash: "#industries" },
];

const Navbar = ({ onContactClick }: { onContactClick?: () => void } = {}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  const scrollToSection = useCallback(
    (hash: string) => {
      setMobileOpen(false);
      if (location.pathname !== "/") {
        navigate("/" + hash);
        return;
      }
      if (!hash) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    [location.pathname, navigate]
  );

  const handleContactClick = () => {
    setMobileOpen(false);
    if (location.pathname !== "/") {
      navigate("/#contact");
      return;
    }
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-b-primary/40">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
        <button onClick={() => scrollToSection("")} className="flex items-center gap-3">
          <img src={logo} alt="AA Innovation" className="h-12 w-auto" decoding="async" width={160} height={48} fetchPriority="high" />
          <span className="text-primary-foreground font-bold text-xl tracking-wide hidden sm:inline">AA INNOVATION</span>
        </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.hash)}
                className="text-sm tracking-wide transition-colors duration-200 text-primary-foreground/60 hover:text-primary-foreground"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={handleContactClick}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium rounded-full hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </button>
          </div>

          <div className="flex items-center gap-3">
            {/* Mobile nav toggle */}
            <button className="md:hidden text-primary-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Hamburger menu (all screens) */}
            <button
              className="text-primary-foreground hover:text-primary transition-colors"
              onClick={() => setSheetOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>

        {/* Mobile nav dropdown */}
        {mobileOpen && (
          <div className="md:hidden bg-secondary/95 backdrop-blur-sm border-t border-primary/20 px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.hash)}
                className="block text-sm transition-colors text-primary-foreground/60 hover:text-primary-foreground"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={handleContactClick}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 text-sm font-medium rounded-full hover:bg-primary/90 transition-colors mt-2"
            >
              Contact Us
            </button>
          </div>
        )}
      </nav>

      {/* Side panel / Hamburger Sheet */}
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent side="right" className="bg-secondary/95 backdrop-blur-xl border-l border-primary/20 w-[280px] sm:max-w-[280px]">
          <SheetHeader className="mb-8">
            <SheetTitle className="text-foreground text-left">Menu</SheetTitle>
            <SheetDescription className="text-muted-foreground text-left text-xs">
              Quick access links
            </SheetDescription>
          </SheetHeader>

          <div className="space-y-2">
            <Link
              to="/login"
              onClick={() => setSheetOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-sm text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/5 transition-colors rounded-md"
            >
              <User size={18} className="text-primary" />
              Profile
            </Link>

            <Link
              to="/faq"
              onClick={() => setSheetOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-sm text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/5 transition-colors rounded-md"
            >
              <HelpCircle size={18} className="text-primary" />
              FAQ
            </Link>

            <button
              onClick={handleContactClick}
              className="flex items-center gap-3 px-4 py-3 text-sm text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/5 transition-colors rounded-md w-full text-left"
            >
              <Mail size={18} className="text-primary" />
              Contact Us
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Navbar;
