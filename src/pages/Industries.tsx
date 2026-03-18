import { motion } from "framer-motion";
import { Zap, Heart, Factory, DollarSign, Users, Building, Truck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactBanner from "@/components/ContactBanner";

const industries = [
  {
    icon: Zap,
    title: "Energy",
    tagline: "Powering the Infrastructure of Tomorrow.",
    desc: "AA Innovation empowers energy companies to modernize infrastructure, optimize grid management, and accelerate the transition to sustainable operations. Our solutions span upstream, midstream, and downstream — integrating advanced analytics, IoT-enabled asset monitoring, and digital twin technologies to enhance efficiency, reduce downtime, and ensure regulatory compliance.",
    bullets: [
      "Smart grid modernization and energy management systems",
      "Predictive maintenance and asset performance optimization",
      "Renewable energy integration and sustainability reporting",
      "Regulatory compliance: NERC CIP, EPA, FERC, and state frameworks",
      "Cybersecurity for operational technology (OT) environments",
    ],
  },
  {
    icon: Heart,
    title: "Healthcare",
    tagline: "Better Technology. Better Care. No Compromises.",
    desc: "We partner with health systems, payers, life sciences organizations, and government health agencies to modernize clinical and administrative operations, improve data interoperability, and deploy technology that improves care delivery without adding complexity. Every solution is built with HIPAA compliance, patient safety, and long-term scalability at its core.",
    bullets: [
      "EHR integration, optimization, and interoperability (HL7, FHIR)",
      "Healthcare data analytics and population health platforms",
      "Telehealth and digital care delivery infrastructure",
      "Revenue cycle modernization and billing automation",
      "HIPAA compliance, cybersecurity, and health data governance",
    ],
  },
  {
    icon: Factory,
    title: "Manufacturing",
    tagline: "The Factory of the Future Is Here.",
    desc: "AA Innovation helps manufacturers embrace Industry 4.0 by connecting people, machines, and data across the production lifecycle. From smart factory design to supply chain optimization, we enable manufacturers to increase throughput, reduce waste, and maintain a competitive edge in a rapidly evolving global marketplace.",
    bullets: [
      "Smart factory design and Industry 4.0 roadmapping",
      "MES implementation and ERP / OT integration",
      "Predictive quality and defect reduction analytics",
      "Supply chain visibility, demand forecasting, and inventory optimization",
      "OT / IT convergence and industrial cybersecurity",
    ],
  },
  {
    icon: DollarSign,
    title: "Finance",
    tagline: "Where Risk Meets Resilience.",
    desc: "In the financial services sector, AA Innovation delivers technology-driven solutions that enhance operational resilience, ensure regulatory compliance, and unlock new revenue opportunities. We work with banks, credit unions, investment firms, and insurance companies to modernize legacy systems and build agile, data-driven organizations.",
    bullets: [
      "Core banking modernization and cloud migration",
      "Risk management, AML compliance, and fraud detection",
      "Regulatory reporting, data governance, and audit readiness",
      "Wealth management and investment platform development",
      "Open banking architecture and fintech integration",
    ],
  },
  {
    icon: Users,
    title: "Consulting",
    tagline: "Strategic Clarity. Actionable Outcomes.",
    desc: "AA Innovation's consulting practice brings strategic clarity to complex business challenges. We combine industry expertise with analytical rigor to help organizations define their vision, align their operations, and execute with precision. Our consultants serve as trusted advisors — delivering insights that are actionable, measurable, and aligned with long-term business goals.",
    bullets: [
      "Digital strategy and enterprise transformation roadmaps",
      "Organizational change management and adoption",
      "Process optimization and operational efficiency",
      "Technology vendor selection and program management",
      "Performance benchmarking and KPI development",
    ],
  },
  {
    icon: Building,
    title: "Federal",
    tagline: "Mission-Ready. Compliance-Built. Outcome-Accountable.",
    desc: "AA Innovation is a trusted partner to federal agencies and government organizations, delivering mission-critical technology solutions that meet the rigorous standards of public sector service. We specialize in modernizing legacy systems, enhancing cybersecurity posture, and improving citizen-facing digital services — in full alignment with federal regulations and security frameworks.",
    bullets: [
      "Federal IT modernization and legacy system migration",
      "Cloud adoption and FedRAMP-compliant infrastructure",
      "Cybersecurity: FISMA, NIST 800-53, Zero Trust Architecture",
      "Digital services and citizen experience platform development",
      "Program management, acquisition support, and CPIC alignment",
    ],
  },
  {
    icon: Truck,
    title: "Logistics",
    tagline: "Every Link in the Chain, Optimized.",
    desc: "In an era of global supply chain complexity, AA Innovation provides logistics and transportation companies with the digital tools they need to optimize operations, improve visibility, and deliver on customer expectations. From last-mile delivery to global freight management, we engineer solutions that bring agility and intelligence to every link in the chain.",
    bullets: [
      "Supply chain visibility and real-time tracking platforms",
      "Transportation management system (TMS) implementation and optimization",
      "Warehouse automation and inventory intelligence",
      "Last-mile delivery optimization and route analytics",
      "Supply chain resilience modeling and risk scenario planning",
    ],
  },
];

const Industries = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-prussian pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-horizon text-xs tracking-[0.3em] uppercase mb-4 font-medium">Where We Operate</p>
            <h1 className="text-4xl md:text-5xl font-black text-primary-foreground mb-6">Industries We Serve</h1>
            <p className="text-sterling/80 max-w-2xl text-lg leading-relaxed">
              AA Innovation delivers specialized capabilities across seven core industries. Every practice 
              is led by sector veterans — practitioners who have spent careers inside the industries they advise.
            </p>
          </motion.div>
        </div>
      </section>

      {industries.map((ind, i) => (
        <section
          key={ind.title}
          className={`py-16 ${i % 2 === 0 ? "bg-background" : "bg-frost"}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <ind.icon size={24} className="text-horizon" />
                <div>
                  <h2 className="text-2xl font-extrabold text-ocean">{ind.title}</h2>
                  <p className="text-horizon text-sm font-medium">{ind.tagline}</p>
                </div>
              </div>

              <p className="text-foreground/80 leading-relaxed max-w-4xl mb-6">{ind.desc}</p>

              <ul className="space-y-2 max-w-3xl">
                {ind.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-foreground/70">
                    <span className="text-horizon font-bold mt-0.5">▸</span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
      ))}

      <ContactBanner />
      <Footer />
    </div>
  );
};

export default Industries;
