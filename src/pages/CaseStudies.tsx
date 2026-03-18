import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactBanner from "@/components/ContactBanner";

const caseStudies = [
  {
    title: "Digital Transformation for Energy Provider",
    industry: "Energy",
    desc: "Modernized grid management infrastructure with IoT-enabled asset monitoring and predictive maintenance, reducing downtime by 40% and achieving full NERC CIP compliance.",
  },
  {
    title: "Healthcare Data Interoperability Platform",
    industry: "Healthcare",
    desc: "Deployed an enterprise-wide EHR integration platform using HL7 FHIR standards, enabling real-time data sharing across 12 facilities and improving patient outcomes by 25%.",
  },
  {
    title: "Federal IT Modernization Initiative",
    industry: "Federal",
    desc: "Led a multi-year legacy system migration to FedRAMP-compliant cloud infrastructure, implementing Zero Trust Architecture and achieving FISMA compliance ahead of schedule.",
  },
  {
    title: "Manufacturing Industry 4.0 Rollout",
    industry: "Manufacturing",
    desc: "Designed and implemented a smart factory ecosystem connecting MES, ERP, and OT systems — increasing throughput by 32% and reducing defect rates by 18%.",
  },
  {
    title: "Financial Services Risk Platform",
    industry: "Finance",
    desc: "Built an integrated risk management and fraud detection platform for a regional bank, enabling real-time AML compliance and reducing false positives by 60%.",
  },
  {
    title: "Supply Chain Visibility Solution",
    industry: "Logistics",
    desc: "Engineered an end-to-end supply chain visibility platform with real-time tracking, demand forecasting, and last-mile delivery optimization across 3 continents.",
  },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-prussian pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-horizon text-xs tracking-[0.3em] uppercase mb-4 font-medium">Our Work</p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Successful Projects, Proven Impact
            </h1>
            <p className="text-sterling max-w-2xl text-lg leading-relaxed">
              We measure success in deployed systems and measurable results. Here's proof of what 
              AA Innovation delivers across industries.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg border border-border p-8 hover:shadow-lg transition-shadow group"
              >
                <span className="text-xs font-medium text-horizon tracking-wide uppercase">{cs.industry}</span>
                <h3 className="text-prussian font-semibold text-lg mt-3 mb-3">{cs.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed mb-4">{cs.desc}</p>
                <Link
                  to="/contact"
                  className="text-horizon text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  See Case Study <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactBanner />
      <Footer />
    </div>
  );
};

export default CaseStudies;
