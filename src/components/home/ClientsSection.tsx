import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";

const stats = [
  { num: "200+", label: "Projects Completed" },
  { num: "120+", label: "Happy Clients" },
  { num: "5+", label: "Years Experience" },
];

const clients = [
  { name: "Nexora", logo: "/partner.png" },
  { name: "Lumivault", logo: "/partner1.png" },
  { name: "Streamline", logo: "/partner2.png" },
  { name: "Bridgepoint", logo: "/partner3.png" },
  // { name: "proplyy", logo: "/partner4.png" },
];

const ClientsSection = () => (
  <SectionWrapper className="bg-primary/[0.03]">
    <SectionHeading title="Trusted by Businesses" />

    {/* Logo carousel */}
    <div className="overflow-hidden mb-20 relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-transparent to-background-dark/80 z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-transparent to-background-dark/80 z-10 pointer-events-none" />

      <div className="flex w-max animate-scroll-left">
        {[...clients, ...clients].map((client, i) => (
          <div
            key={i}
            className="inline-flex items-center justify-center px-12 py-6 flex-shrink-0"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="h-28 w-54 object-contain opacity-80 hover:opacity-100 brightness-110 contrast-125 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="text-center"
        >
          <div className="text-5xl font-display font-bold text-accent mb-2">{s.num}</div>
          <div className="text-sm text-muted-foreground font-medium">{s.label}</div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default ClientsSection;
