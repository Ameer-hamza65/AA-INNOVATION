import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Lock, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";
import heroBg from "@/assets/hero-bg.jpg";

const Register = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({ title: "Coming Soon", description: "Registration will be available soon." });
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="fixed inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="fixed inset-0 bg-background/50" />
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="relative z-10 w-[94vw] max-w-[420px] mt-[72px]">
        <div className="border border-white/[0.12] bg-background/50 backdrop-blur-2xl shadow-[0_0_40px_-5px_hsl(var(--primary)/0.2)] p-8">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">
              <Logo size="md" showText={false} />
            </div>
            <h1 className="text-xl font-bold text-foreground mb-1">Create Account</h1>
            <p className="text-xs text-muted-foreground">Join AA Innovations today</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-foreground mb-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/60" />
                <input type="text" required placeholder="Jane Doe" className="form-input-style pl-9" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-foreground mb-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/60" />
                <input type="email" required placeholder="jane.doe@company.com" className="form-input-style pl-9" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-foreground mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/60" />
                <input type="password" required placeholder="••••••••" className="form-input-style pl-9" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-foreground mb-1">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/60" />
                <input type="password" required placeholder="••••••••" className="form-input-style pl-9" />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 text-xs font-semibold rounded-full hover:bg-primary/85 transition-colors disabled:opacity-50 shadow-[0_0_15px_-3px_hsl(var(--primary)/0.4)]"
            >
              {isSubmitting ? "Creating..." : "Create Account"} <ArrowRight size={14} />
            </button>
          </form>

          <p className="text-center text-xs text-muted-foreground mt-5">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline font-medium">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
