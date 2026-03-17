import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import marketingGrowth from "@/assets/marketing-growth.png";

const points = [
  "Increase online visibility",
  "Generate qualified leads",
  "Build strong brand presence",
  "Scale revenue faster",
];

const WhyDigitalSection = () => (
  <SectionWrapper>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
      <div className="lg:col-span-7">
        <h2 className="text-section font-display font-semibold text-foreground mb-6">
          Why Your Business Needs Digital Marketing
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
          In today's digital landscape, online visibility is the foundation of growth. The right
          digital strategy connects you with your ideal customers, builds trust, and drives
          predictable revenue.
        </p>
        <ul className="space-y-4">
          {points.map((p, i) => (
            <motion.li
              key={p}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                <Check size={14} className="text-accent" />
              </div>
              <span className="text-foreground font-medium">{p}</span>
            </motion.li>
          ))}
        </ul>
      </div>
      <motion.div
        className="lg:col-span-5"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={marketingGrowth}
          alt="Digital marketing growth visualization"
          className="rounded-3xl shadow-premium-lg w-full"
        />
      </motion.div>
    </div>
  </SectionWrapper>
);

export default WhyDigitalSection;
