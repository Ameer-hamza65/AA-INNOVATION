import { motion } from "framer-motion";
import { ArrowRight, Bot, BarChart3, Cloud, Shield } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI & Automation",
    description:
      "Leverage artificial intelligence and machine learning to automate processes, gain insights, and drive innovation across your organization.",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description:
      "Transform raw data into actionable intelligence with advanced analytics platforms, real-time dashboards, and predictive modeling.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Modernize your infrastructure with scalable cloud architectures, seamless migrations, and optimized multi-cloud strategies.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Protect your digital assets with comprehensive security frameworks, threat detection, and compliance-driven defense strategies.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3 font-medium">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-light text-foreground">Our Services</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card border border-border p-8 hover:border-primary/30 transition-all duration-300"
            >
              <service.icon className="text-primary mb-6" size={32} strokeWidth={1.5} />
              <h3 className="text-foreground font-medium text-lg mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all duration-200"
              >
                Learn More
                <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
