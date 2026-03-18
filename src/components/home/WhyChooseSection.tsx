import { motion } from "framer-motion";
import { BarChart3, Users, Lightbulb } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";

const features = [
  { 
    icon: BarChart3, 
    title: "Ground-Level Marketing Experience", 
    desc: "Creovate Media is built on 17 years of marketing experience in the Lucknow market. Over the years, we have worked closely with businesses, customers, and sales teams, giving us real insights into what attracts attention and drives buying decisions in this region." 
  },
  { 
    icon: Users, 
    title: "Creatives Designed to Perform", 
    desc: "Having tested hundreds of creatives, campaigns, and promotional strategies across different industries, we understand what works and what doesn't. Our creatives are designed with clear marketing intent — to capture attention quickly and support real business growth." 
  },
  { 
    icon: Lightbulb, 
    title: "Strategy Powered by Digital Tools", 
    desc: "Digital platforms offer powerful capabilities, but results depend on how they are used. We combine years of marketing learning with modern digital tools to plan, execute, and optimize campaigns that focus on measurable outcomes, not just online activity." 
  },
];

const WhyChooseSection = () => (
  <SectionWrapper className="bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-800">
    <SectionHeading
      title="Why Bussinesses Choose Creovate Media"
      subtitle="We combine strategic thinking with flawless execution."
    />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="text-center p-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300"
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
