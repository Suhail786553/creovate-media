import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";

const stats = [
  { num: "100+", label: "Projects Completed" },
  { num: "20+", label: "Happy Clients" },
  { num: "5+", label: "Years Experience" },
];

const clients = [
  { name: "Nexora", logo: "/partner.png" },
  { name: "Lumivault", logo: "/partner1.png" },
  { name: "Streamline", logo: "/partner2.png" },
  { name: "Bridgepoint", logo: "/partner3.png" },
];

const ClientsSection = () => (
  <SectionWrapper className="bg-slate-50 dark:bg-slate-900/50">
    <SectionHeading title="Trusted by Businesses" />

    {/* Logo carousel with continuous scroll */}
    <div className="relative mb-20 overflow-hidden py-8">
      {/* Gradient overlays for seamless fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 dark:from-slate-900/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 dark:from-slate-900/50 to-transparent z-10 pointer-events-none" />

      {/* Scrolling container */}
      <div className="flex">
        <motion.div
          className="flex gap-16 items-center"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {/* Duplicate logos for seamless loop */}
          {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center px-8 py-4 bg-white dark:bg-slate-800/50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-24 w-44 object-contain opacity-100 group-hover:grayscale group-hover:opacity-100 transition-all duration-500"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="text-center p-6 rounded-2xl bg-white dark:bg-slate-800/30 shadow-sm"
        >
          <div className="text-5xl font-display font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
            {s.num}
          </div>
          <div className="text-sm text-muted-foreground font-medium">
            {s.label}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default ClientsSection;
