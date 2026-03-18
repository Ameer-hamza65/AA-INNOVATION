import { motion } from "framer-motion";

const rows = [
  { us: "Senior practitioners on every engagement", them: "Junior delivery teams after contract signature" },
  { us: "Seven integrated industries, zero silos", them: "Siloed practices with competing priorities" },
  { us: "AI deployed to deliver outcomes, not demos", them: "AI roadmaps that rarely survive implementation" },
  { us: "End-to-end: strategy through go-live", them: "Recommendations handed off to another team" },
  { us: "Mobilize in days, not procurement cycles", them: "Months of scoping before work begins" },
  { us: "One team, one relationship, one outcome", them: "Multiple handoffs, multiple points of failure" },
];

const WhyUsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-horizon text-xs tracking-[0.3em] uppercase mb-4 font-medium">The Difference</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ocean">Why AA Innovation</h2>
          <p className="text-foreground/60 mt-4 max-w-2xl mx-auto">
            Organizations choose us because we deliver more than technology — we deliver outcomes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="overflow-hidden border border-border"
        >
          <div className="grid grid-cols-2 bg-prussian text-primary-foreground">
            <div className="p-4 font-semibold text-sm">The AA Innovation Way</div>
            <div className="p-4 font-semibold text-sm border-l border-ocean">The Alternative</div>
          </div>
          {rows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-2 ${i % 2 === 0 ? "bg-frost" : "bg-card"}`}
            >
              <div className="p-4 text-sm text-foreground/80 font-medium">{row.us}</div>
              <div className="p-4 text-sm text-foreground/50 border-l border-border">{row.them}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;
