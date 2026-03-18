import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const topics = ["Industries", "Solutions", "Careers", "Partnerships", "Press / Media", "Website Feedback", "Other"];
const industries = ["Energy", "Healthcare", "Manufacturing", "Finance", "Consulting", "Federal", "Logistics"];
const serviceAreas = ["AI & Automation", "Data Analytics", "Cloud Services", "Cybersecurity", "Consulting", "Digital Transformation", "Program Management"];
const locations = ["United States", "Canada", "United Kingdom", "Europe", "Asia Pacific", "Middle East", "Latin America", "Other"];

const Contact = () => {
  const { toast } = useToast();
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({ title: "Message sent", description: "Thank you for contacting AA Innovation. We'll be in touch shortly." });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-prussian pt-28 pb-14">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <p className="text-horizon text-xs tracking-[0.3em] uppercase mb-4 font-medium">Get In Touch</p>
            <h1 className="text-4xl md:text-5xl font-black text-primary-foreground mb-5">Contact Us</h1>
            <p className="text-sterling/80 max-w-2xl text-lg leading-relaxed">
              For inquiries or requests that require a more detailed response, please complete the form below and a member of our team will follow up with you promptly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="bg-ocean py-5">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap gap-8 items-center">
          {[
            { label: "Email", value: "info@aainnovation.com" },
            { label: "Phone", value: "+1 (321) 477-9875" },
            { label: "Website", value: "www.aainnovation.com" },
          ].map((item, i) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="text-sterling text-sm">{item.label}:</span>
              <span className="text-primary-foreground text-sm font-medium">{item.value}</span>
              {i < 2 && <span className="text-sterling/40 ml-4 hidden md:inline">|</span>}
            </div>
          ))}
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-frost p-8 md:p-12 border border-border"
          >
            <h2 className="text-2xl font-extrabold text-ocean mb-2">How can we help?</h2>
            <p className="text-foreground/60 text-sm mb-8">
              Fields marked with an asterisk (<span className="text-horizon font-semibold">*</span>) are required.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-3 gap-5">
                <FormSelect label="Topic" required options={topics} placeholder="Select a topic" />
                <FormSelect label="Industry" options={industries} placeholder="Select an industry" />
                <FormSelect label="Service Area" options={serviceAreas} placeholder="Select a service area" />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <FormInput label="First Name" required placeholder="Jane" />
                <FormInput label="Last Name" required placeholder="Doe" />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <FormInput label="Email Address" required type="email" placeholder="jane.doe@company.com" />
                <FormInput label="Phone Number" type="tel" placeholder="+1 (555) 000-0000" />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <FormInput label="Company" required placeholder="Your Company" />
                <FormInput label="Job Title" required placeholder="Your Title" />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <FormSelect label="Location" required options={locations} placeholder="Select your location" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  How can we help? <span className="text-horizon">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-horizon resize-none"
                  placeholder="Tell us about your project, challenge, or question..."
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="consent"
                  checked={consent}
                  onCheckedChange={(v) => setConsent(v === true)}
                  className="mt-0.5"
                />
                <label htmlFor="consent" className="text-sm text-foreground/70 leading-relaxed cursor-pointer">
                  I agree to receive communications from AA Innovation LLC. You can unsubscribe at any time. View our{" "}
                  <span className="text-horizon underline">Privacy Policy</span>.
                </label>
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-prussian text-primary-foreground px-8 py-3.5 text-sm font-medium hover:bg-ocean transition-colors"
              >
                Submit <ArrowRight size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-frost py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-extrabold text-ocean mb-3">Ready to innovate?</h2>
          <p className="text-foreground/60 mb-2">Let's build what's next — together.</p>
          <p className="text-prussian font-semibold">Always Ahead.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const FormInput = ({
  label,
  required,
  type = "text",
  placeholder,
}: {
  label: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
}) => (
  <div>
    <label className="block text-sm font-medium text-foreground mb-2">
      {label} {required && <span className="text-horizon">*</span>}
    </label>
    <input
      type={type}
      required={required}
      placeholder={placeholder}
      className="w-full px-4 py-3 border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-horizon"
    />
  </div>
);

const FormSelect = ({
  label,
  required,
  options,
  placeholder,
}: {
  label: string;
  required?: boolean;
  options: string[];
  placeholder: string;
}) => (
  <div>
    <label className="block text-sm font-medium text-foreground mb-2">
      {label} {required && <span className="text-horizon">*</span>}
    </label>
    <Select required={required}>
      <SelectTrigger className="w-full px-4 py-3 h-auto border border-border bg-background text-sm">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((opt) => (
          <SelectItem key={opt} value={opt}>
            {opt}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);

export default Contact;
