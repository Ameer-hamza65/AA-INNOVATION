import { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const services = [
  "AI & Machine Learning",
  "Cloud Solutions",
  "Cybersecurity",
  "Data Analytics",
  "Digital Transformation",
  "IT Consulting",
  "Software Development",
  "Other",
];

interface ContactFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactFormModal = ({ open, onOpenChange }: ContactFormModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content className="fixed left-[50%] top-[50%] z-50 w-[94vw] max-w-[560px] translate-x-[-50%] translate-y-[-50%] duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] focus:outline-none">
          
          {/* Close button */}
          <DialogPrimitive.Close className="absolute -right-3 -top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 bg-primary text-primary-foreground shadow-[0_0_12px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_20px_hsl(var(--primary)/0.6)] hover:bg-primary/85 transition-all">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>

          {/* Glowing glass container */}
          <div className="relative border border-white/[0.12] shadow-[0_0_40px_-5px_hsl(var(--primary)/0.25),inset_0_0_40px_-10px_hsl(var(--primary)/0.08)] bg-background/60 backdrop-blur-2xl overflow-hidden">
            
            <div className="px-6 pt-4 pb-5 sm:px-8">
              {/* Header */}
              <div className="text-center mb-3">
                <p className="text-[9px] font-semibold tracking-[0.3em] uppercase text-primary mb-0.5">
                  Get in Touch
                </p>
                <DialogPrimitive.Title className="text-lg font-bold text-foreground mb-0.5">
                  Contact Us
                </DialogPrimitive.Title>
                <DialogPrimitive.Description className="text-[11px] text-muted-foreground leading-tight">
                  Ready to innovate? Let's build what's next — together.
                </DialogPrimitive.Description>
                <p className="text-[10px] text-muted-foreground mt-1">
                  Required fields are marked with an asterisk (<span className="text-primary font-bold">*</span>)
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-2">
                {/* Full Name */}
                <FormField label="Full Name" required>
                  <input
                    name="full_name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    className="form-input-style"
                  />
                </FormField>

                {/* Email */}
                <FormField label="Email" required>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="jane.doe@company.com"
                    className="form-input-style"
                  />
                </FormField>

                {/* Message */}
                <FormField label="Message" required>
                  <textarea
                    name="message"
                    required
                    rows={2}
                    maxLength={2000}
                    placeholder="Tell us about your project, challenge, or question..."
                    className="form-input-style resize-none"
                  />
                </FormField>

                {/* Company Name */}
                <FormField label="Company Name">
                  <input
                    name="company"
                    type="text"
                    placeholder="Your Company (optional)"
                    className="form-input-style"
                  />
                </FormField>

                {/* Phone Number */}
                <FormField label="Phone Number" hint="for faster response">
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) ..."
                    className="form-input-style"
                  />
                </FormField>

                {/* Service Interest */}
                <FormField label="Service Interest">
                  <Select name="service_interest">
                    <SelectTrigger className="w-full px-3 py-1.5 h-auto border border-white/10 bg-white/5 backdrop-blur-sm text-xs text-muted-foreground rounded-none focus:border-primary/60">
                      <SelectValue placeholder="Select a service (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormField>

                {/* Submit */}
                <div className="pt-0.5">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-2 text-xs font-semibold rounded-full hover:bg-primary/85 transition-colors disabled:opacity-50 shadow-[0_0_15px_-3px_hsl(var(--primary)/0.4)]"
                  >
                    {isSubmitting ? "Sending..." : "Submit"} <ArrowRight size={14} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

/* ── Sub-component ── */

const FormField = ({
  label,
  required,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) => (
  <div>
    <label className="block text-xs font-medium text-foreground mb-1">
      {label}
      {required && <span className="text-primary/70 ml-0.5">*</span>}
      {hint && <span className="text-[10px] font-normal text-muted-foreground ml-1.5">({hint})</span>}
    </label>
    {children}
  </div>
);

export default ContactFormModal;
