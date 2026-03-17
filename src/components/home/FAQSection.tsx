import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";

const faqs = [
  { q: "How long does SEO take to show results?", a: "Typically 3-6 months for meaningful results, depending on competition and current site authority. We provide monthly progress reports so you can track improvements from day one." },
  { q: "Do you offer monthly digital marketing packages?", a: "Yes, we offer flexible monthly retainers tailored to your business goals and budget. Each package includes strategy, execution, and transparent reporting." },
  { q: "Can you manage our social media accounts?", a: "Absolutely. We handle content creation, scheduling, community management, and paid social campaigns across all major platforms." },
  { q: "How do you track marketing performance?", a: "We use a combination of Google Analytics, custom dashboards, and proprietary tools to provide real-time visibility into campaign performance and ROI." },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <SectionWrapper>
      <SectionHeading title="Frequently Asked Questions" />
      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="border border-primary/5 rounded-2xl overflow-hidden bg-card"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <span className="font-display font-semibold text-foreground pr-4">{f.q}</span>
              <ChevronDown
                size={20}
                className={`text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                  open === i ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">
                    {f.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default FAQSection;
