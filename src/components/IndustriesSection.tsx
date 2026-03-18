import { motion } from "framer-motion";
import { ArrowRight, Zap, Heart, Factory, DollarSign, Users, Building, Truck } from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  { icon: Zap, title: "Energy", tagline: "Powering the Infrastructure of Tomorrow." },
  { icon: Heart, title: "Healthcare", tagline: "Better Technology. Better Care. No Compromises." },
  { icon: Factory, title: "Manufacturing", tagline: "The Factory of the Future Is Here." },
  { icon: DollarSign, title: "Finance", tagline: "Where Risk Meets Resilience." },
  { icon: Users, title: "Consulting", tagline: "Strategic Clarity. Actionable Outcomes." },
  { icon: Building, title: "Federal", tagline: "Mission-Ready. Compliance-Built. Outcome-Accountable." },
  { icon: Truck, title: "Logistics", tagline: "Every Link in the Chain, Optimized." },
];

const IndustriesSection = () => {
  return (
    <section className="py-24 bg-frost">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-horizon text-xs tracking-[0.3em] uppercase mb-4 font-medium">Where We Operate</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ocean">Industries We Serve</h2>
          <p className="text-foreground/60 mt-4 max-w-2xl mx-auto">
            Specialized capabilities across seven core industries, each led by sector veterans.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              viewport={{ once: true }}
              className="bg-card p-6 border border-border hover:border-horizon transition-colors group"
            >
              <ind.icon size={22} className="text-horizon mb-4" />
              <h3 className="text-prussian font-semibold mb-2">{ind.title}</h3>
              <p className="text-foreground/60 text-sm mb-4">{ind.tagline}</p>
              <Link
                to="/industries"
                className="text-horizon text-sm font-medium inline-flex items-center gap-1"
              >
                Learn More <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
