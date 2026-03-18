import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-prussian pt-[72px]">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-sterling/80 text-xs tracking-[0.3em] uppercase font-medium mb-8"
          >
            Always Ahead.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-[1.05] mb-8"
          >
            AA INNOVATION
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sterling/80 text-base md:text-lg max-w-2xl mb-12 leading-relaxed"
          >
            A forward-thinking technology and consulting firm dedicated to delivering transformative 
            solutions that drive business growth and operational excellence across Energy, Healthcare, 
            Manufacturing, Finance, Consulting, Federal, and Logistics.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-horizon text-primary-foreground px-8 py-3.5 text-sm font-medium hover:bg-accent/90 transition-colors"
            >
              Book a Free Strategy Call
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/industries"
              className="inline-flex items-center gap-3 border border-sterling/30 text-primary-foreground px-8 py-3.5 text-sm font-medium hover:bg-primary-foreground/5 transition-colors"
            >
              Explore Industries
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
