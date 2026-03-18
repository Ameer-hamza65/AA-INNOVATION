import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-horizon text-xs tracking-[0.3em] uppercase mb-4 font-medium">About Us</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ocean mb-8">Who We Are</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-foreground/80 leading-relaxed">
              AA Innovation LLC is a forward-thinking technology and consulting firm dedicated to delivering 
              transformative solutions that drive business growth and operational excellence. We partner with 
              organizations across a broad spectrum of industries — including Energy, Healthcare, Manufacturing, 
              Finance, Consulting, Federal, and Logistics — to design, develop, and implement strategies that 
              harness the power of emerging technologies, turning complex challenges into sustainable competitive advantages.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              At AA Innovation, we bring together a diverse team of experienced professionals, technologists, 
              and industry specialists with deep domain expertise across every sector we serve. Our integrated 
              approach combines sector-specific knowledge with cutting-edge innovation, enabling our clients to 
              navigate an ever-evolving digital landscape with clarity, agility, and confidence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="bg-frost p-8 border-l-4 border-horizon">
              <p className="text-foreground/80 leading-relaxed">
                We are driven by a singular purpose: to empower organizations to achieve more. Whether 
                modernizing legacy systems, ensuring regulatory compliance, accelerating manufacturing efficiency, 
                or pioneering new digital capabilities in financial services and beyond, AA Innovation LLC stands 
                as a trusted partner at every stage of the journey — delivering solutions built for today and 
                designed for tomorrow.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
