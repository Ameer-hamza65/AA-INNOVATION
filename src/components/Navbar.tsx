import { Menu, User, HelpCircle, Mail } from "lucide-react";
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
  // Removed the redundant mobileOpen state! We only need the sheet now.
  const [sheetOpen, setSheetOpen] = useState(false);

  const scrollToSection = useCallback(
    (hash: string) => {
      setSheetOpen(false);
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
    setSheetOpen(false);
    if (onContactClick) {
      onContactClick();
      return;
    }
    if (location.pathname !== "/") {
      navigate("/#contact");
      return;
    }
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-b-primary/40">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
          <button onClick={() => scrollToSection("")} className="flex items-center">
            <Logo size="md" />
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
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium rounded-none hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </button>
          </div>

          <div className="flex items-center gap-3">
            {/* ONLY ONE Hamburger menu for all screens */}
            <button
              className="text-primary-foreground hover:text-primary transition-colors p-2"
              onClick={() => setSheetOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Unified Side Panel / Hamburger Sheet */}
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent side="right" className="bg-secondary/95 backdrop-blur-xl border-l border-primary/20 w-[280px] sm:max-w-[280px] rounded-none">
          <SheetHeader className="mb-8 mt-4">
            <SheetTitle className="text-foreground text-left">Menu</SheetTitle>
            <SheetDescription className="text-muted-foreground text-left text-xs">
              Navigation and quick access
            </SheetDescription>
          </SheetHeader>

          <div className="flex flex-col gap-6">
            
            {/* Core Nav - Only shows in the drawer on Mobile (md:hidden) */}
            <div className="md:hidden flex flex-col space-y-4 border-b border-primary/20 pb-6">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.hash)}
                  className="text-left text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Utility Links (CR-005) - Always shows in the drawer */}
            <div className="flex flex-col space-y-2">
              <Link
                to="/login"
                onClick={() => setSheetOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-sm text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/5 transition-colors rounded-none"
              >
                <User size={18} className="text-primary" />
                Profile
              </Link>

              <Link
                to="/faq"
                onClick={() => setSheetOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-sm text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/5 transition-colors rounded-none"
              >
                <HelpCircle size={18} className="text-primary" />
                FAQ
              </Link>

              <button
                onClick={handleContactClick}
                className="flex items-center gap-3 px-4 py-3 text-sm text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/5 transition-colors rounded-none w-full text-left"
              >
                <Mail size={18} className="text-primary" />
                Contact Us
              </button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Navbar;