import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";

const stats = [
  { num: "200+", label: "Projects Completed" },
  { num: "120+", label: "Happy Clients" },
  { num: "5+", label: "Years Experience" },
];

const logos = [
  "Nexora", "Lumivault", "Streamline", "Bridgepoint", "Curatel",
  "Synthetik", "Orbitflow", "Pressmark",
];

const ClientsSection = () => (
  <SectionWrapper className="bg-primary/[0.03]">
    <SectionHeading title="Trusted by Businesses" />

    {/* Logo carousel */}
    <div className="overflow-hidden mb-20 relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background/80 to-transparent z-10 pointer-events-none" />
      <div className="flex animate-scroll-left whitespace-nowrap">
        {[...logos, ...logos].map((name, i) => (
          <div
            key={i}
            className="inline-flex items-center justify-center px-12 py-6 text-xl font-display font-semibold text-muted-foreground/30 select-none"
          >
            {name}
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
