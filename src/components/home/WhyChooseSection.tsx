import { motion } from "framer-motion";
import { BarChart3, Users, LineChart, Trophy } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";

const features = [
  { icon: BarChart3, title: "Data-Driven Strategies", desc: "Every decision backed by analytics, not guesswork." },
  { icon: Users, title: "Experienced Experts", desc: "A dedicated team of seasoned digital marketing professionals." },
  { icon: LineChart, title: "Transparent Reporting", desc: "Real-time dashboards and clear performance metrics." },
  { icon: Trophy, title: "Proven Results", desc: "Consistent track record of delivering measurable business growth." },
];

const WhyChooseSection = () => (
  <SectionWrapper className="bg-primary/[0.03]">
    <SectionHeading
      title="Why Businesses Choose Creovate Media"
      subtitle="We combine strategic thinking with flawless execution."
    />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="text-center p-8"
        >
          <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <f.icon size={28} className="text-accent" />
          </div>
          <h3 className="text-lg font-display font-semibold text-foreground mb-2">{f.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default WhyChooseSection;
