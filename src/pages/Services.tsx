import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, Share2, Target, Globe, Palette, FileText, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization",
    desc: "Dominate search results with data-driven SEO strategies that drive organic traffic and high-quality conversions.",
    features: ["Technical SEO Audits", "Keyword Strategy", "Link Building", "Content Optimization"],
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Build engaged communities and amplify your brand reach across all major social platforms.",
    features: ["Content Strategy", "Community Management", "Paid Social Ads", "Analytics & Reporting"],
  },
  {
    icon: Target,
    title: "Google Ads / PPC Campaigns",
    desc: "Maximize ROI with precision-targeted paid advertising campaigns designed to convert.",
    features: ["Campaign Strategy", "A/B Testing", "Bid Management", "Conversion Tracking"],
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    desc: "Craft high-performance websites that captivate visitors and drive measurable business growth.",
    features: ["UX/UI Design", "Responsive Development", "Performance Optimization", "CMS Integration"],
  },
  {
    icon: Palette,
    title: "Branding & Creative Design",
    desc: "Develop distinctive brand identities that resonate deeply with your target audience.",
    features: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Creative Assets"],
  },
  {
    icon: FileText,
    title: "Content Marketing",
    desc: "Create compelling content that educates, engages, and establishes industry thought leadership.",
    features: ["Blog Writing", "Video Content", "Email Marketing", "Content Distribution"],
  },
];

const ServicesPage = () => (
  <Layout>
    {/* Hero */}
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="text-sm font-display font-semibold text-accent uppercase tracking-wider">What We Do</span>
          <h1 className="text-hero font-display font-semibold text-foreground mt-4">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mt-4">
            Comprehensive digital marketing solutions architected for measurable growth.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Services grid */}
    <SectionWrapper className="pt-0">
      <div className="space-y-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-card rounded-3xl border border-primary/5 p-10 hover:shadow-premium-lg transition-all duration-500"
          >
            <div className="lg:col-span-8">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                <s.icon size={24} className="text-accent" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-accent font-display font-medium hover:gap-3 transition-all">
                Get Started <ArrowRight size={16} />
              </Link>
            </div>
            <div className="lg:col-span-4">
              <ul className="space-y-3">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check size={14} className="text-accent flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>

    {/* CTA */}
    <SectionWrapper className="bg-primary text-primary-foreground text-center">
      <h2 className="text-section font-display font-semibold mb-6">Ready to accelerate growth?</h2>
      <p className="text-primary-foreground/60 mb-10 max-w-md mx-auto">
        Schedule a free consultation and discover how we can transform your digital presence.
      </p>
      <Link to="/contact">
        <Button variant="accent" size="xl">
          Initialize Strategy <ArrowRight size={18} />
        </Button>
      </Link>
    </SectionWrapper>
  </Layout>
);

export default ServicesPage;
