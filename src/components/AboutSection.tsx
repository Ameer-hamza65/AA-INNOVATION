import { motion } from "framer-motion";
import teamImg from "@/assets/team-collab.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-lg overflow-hidden">
              <img src={teamImg} alt="AA Innovation team collaboration" className="w-full h-auto object-cover" loading="lazy" decoding="async" width={800} height={450} />
              <div className="absolute bottom-6 left-6 right-6 bg-card/90 backdrop-blur-sm p-6 rounded-lg border border-border">
                <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-2">Our Services</p>
                <p className="text-foreground text-sm leading-relaxed">
                  We deliver transformative digital innovations for enterprise clients across industries, combining cutting-edge technology with deep domain expertise.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-primary text-xs tracking-[0.3em] uppercase font-medium">About Us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed">
              AA Innovation LLC is a forward-thinking technology and consulting firm dedicated to delivering
              transformative solutions that drive business growth and operational excellence. We partner with
              organizations across a broad spectrum of industries — including Energy, Healthcare, Manufacturing,
              Finance, Consulting, Federal, and Logistics.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At AA Innovation, we bring together a diverse team of experienced professionals, technologists,
              and industry specialists with deep domain expertise across every sector we serve.
            </p>
            <div className="bg-frost/10 p-6 border-l-4 border-primary">
              <p className="text-foreground/80 leading-relaxed text-sm">
                We are driven by a singular purpose: to empower organizations to achieve more — delivering
                solutions built for today and designed for tomorrow.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
