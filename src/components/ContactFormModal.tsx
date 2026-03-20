import { useState } from "react";
import { ArrowRight, Sparkles, Send, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const serviceOptions = [
  "AI & Automation",
  "Data & Analytics",
  "Cloud Solutions",
  "Cybersecurity",
  "Digital Transformation",
  "Technology Consulting",
  "Other",
];

interface ContactFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactFormModal = ({ open, onOpenChange }: ContactFormModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formData = new FormData(e.currentTarget);
      formData.append("access_key", "3ca66874-abca-4f25-888e-a6b5e69fe2fd");
      formData.append("subject", "New Contact Form Submission — AA Innovations");
      formData.append("from_name", "AA Innovations Website");

      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await res.json();

      if (data.success) {
        toast({ title: "Message sent", description: "Thank you for contacting AA Innovations. We'll be in touch shortly." });
        (e.target as HTMLFormElement).reset();
        onOpenChange(false);
      } else {
        toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Error", description: "Network error. Please try again later.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (name: string) =>
    `w-full px-4 py-3 border text-sm transition-all duration-300 placeholder:text-muted-foreground rounded-none bg-secondary/50 text-foreground outline-none ${
      focusedField === name
        ? "border-primary shadow-[0_0_15px_-3px_hsl(201,100%,36%,0.4)] ring-1 ring-primary/30"
        : "border-border hover:border-primary/40"
    }`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[520px] max-h-[90vh] overflow-y-auto p-0 border-primary/30 bg-gradient-to-b from-secondary via-card to-secondary gap-0">
        {/* Decorative top accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent" />

        {/* Glowing orb background effect */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative p-6 pt-5">
          <DialogHeader className="space-y-3 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
                <Sparkles size={16} className="text-primary" />
              </div>
              <DialogTitle className="text-xl font-extrabold text-foreground tracking-tight">
                Let's Build Together
              </DialogTitle>
            </div>
            <DialogDescription className="text-muted-foreground text-sm leading-relaxed">
              Tell us about your vision. We'll respond within 24 hours.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
            >
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Full Name <span className="text-primary">*</span>
              </label>
              <input
                name="full_name"
                required
                placeholder="Jane Doe"
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                className={inputClasses("name")}
              />
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Email <span className="text-primary">*</span>
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="jane.doe@company.com"
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className={inputClasses("email")}
              />
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Message <span className="text-primary">*</span>
              </label>
              <textarea
                name="message"
                required
                rows={3}
                maxLength={2000}
                placeholder="Tell us about your project, challenge, or question..."
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                className={`${inputClasses("message")} resize-none`}
              />
            </motion.div>

            {/* Company & Phone */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Company
                </label>
                <input
                  name="company"
                  placeholder="Your Company"
                  onFocus={() => setFocusedField("company")}
                  onBlur={() => setFocusedField(null)}
                  className={inputClasses("company")}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Phone
                </label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                  className={inputClasses("phone")}
                />
              </div>
            </motion.div>

            {/* Service Interest */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Service Interest
              </label>
              <Select name="service_interest">
                <SelectTrigger className="w-full px-4 py-3 h-auto border border-border bg-secondary/50 text-sm hover:border-primary/40 transition-all duration-300">
                  <SelectValue placeholder="Select a service (optional)" />
                </SelectTrigger>
                <SelectContent>
                  {serviceOptions.map((opt) => (
                    <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </motion.div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 pt-1"
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-7 py-3 text-sm font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_-5px_hsl(201,100%,36%,0.5)] hover:bg-primary/90 disabled:opacity-50"
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </>
                  )}
                </span>
              </button>
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="inline-flex items-center gap-2 text-muted-foreground px-5 py-3 text-sm font-medium rounded-full hover:text-foreground hover:bg-secondary transition-all duration-200"
              >
                <ArrowLeft size={14} />
                Go Back
              </button>
            </motion.div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormModal;
