import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, Share2, Target, Globe, Palette, FileText, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";

const services = [
  { icon: Search, title: "Search Engine Optimization", desc: "Dominate search results with data-driven SEO strategies that drive organic traffic and conversions." },
  { icon: Share2, title: "Social Media Marketing", desc: "Build engaged communities and amplify brand reach across all major social platforms." },
  { icon: Target, title: "Google Ads / PPC Campaigns", desc: "Maximize ROI with precision-targeted paid advertising campaigns that convert." },
  { icon: Globe, title: "Website Design & Development", desc: "Craft high-performance websites that captivate visitors and drive business growth." },
  { icon: Palette, title: "Branding & Creative Design", desc: "Develop distinctive brand identities that resonate with your target audience." },
  { icon: FileText, title: "Content Marketing", desc: "Create compelling content that educates, engages, and establishes thought leadership." },
];

const ServicesSection = () => (
  <SectionWrapper className="pb-32 md:pb-48">
    <SectionHeading
      title="Our Digital Marketing Services"
      subtitle="Comprehensive solutions architected for measurable growth."
    />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((s, i) => (
        <motion.div
          key={s.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="group bg-card p-10 rounded-[32px] border border-primary/5 hover:border-accent/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-premium-lg"
        >
          <div className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500">
            <s.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors duration-500" />
          </div>
          <h3 className="text-xl font-display font-semibold text-foreground mb-3">{s.title}</h3>
          <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{s.desc}</p>
          <Link
            to="/services"
            className="inline-flex items-center gap-1 text-accent font-display font-medium text-sm group-hover:gap-2 transition-all duration-300"
          >
            Learn More <ArrowRight size={14} />
          </Link>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default ServicesSection;
