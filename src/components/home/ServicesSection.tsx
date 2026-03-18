import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Share2, Target, Palette, Lightbulb, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";

const services = [
  { icon: Share2, title: "Digital Marketing", desc: "Comprehensive digital strategies including SMM, Influencer Marketing, SEO, and AEO to build your online presence." },
  { icon: Target, title: "Lead Generation", desc: "Targeted campaigns with PPC Ads, Performance Marketing, and Engagement Ads to capture high-quality leads." },
  { icon: Palette, title: "Designing", desc: "Creative solutions including Graphic Design, Video Creation, AI Designing, and UI/UX Design." },
  { icon: Lightbulb, title: "Brand Building", desc: "Strategic brand development with Marketing Consultation and Website Development to establish your market position." },
];

const ServicesSection = () => (
  <SectionWrapper className="">
    <SectionHeading
      title="Marketing Beyond Ordinary"
      subtitle="Our Customized services for you."
    />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
