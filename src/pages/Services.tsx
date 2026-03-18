import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Share2, Target, Palette, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";

const serviceCategories = [
  {
    title: "Digital Marketing",
    icon: Share2,
    description: "Comprehensive digital strategies to build your online presence and drive engagement.",
    services: [
      { name: "SMM", desc: "Strategic social media management across all platforms" },
      { name: "Influencer Marketing", desc: "Partner with influencers to amplify brand reach" },
      { name: "SEO", desc: "Optimize for search engines to increase organic visibility" },
      { name: "AEO", desc: "Answer Engine Optimization for voice search and AI queries" }
    ]
  },
  {
    title: "Lead Generation",
    icon: Target,
    description: "Targeted campaigns to capture high-quality leads and drive conversions.",
    services: [
      { name: "PPC Ads (Google)", desc: "Pay-per-click advertising on Google search and display network" },
      { name: "Lead Generation", desc: "Multi-channel lead capture and nurturing strategies" },
      { name: "Performance Marketing", desc: "Data-driven marketing focused on measurable results" },
      { name: "Awareness Marketing", desc: "Build brand awareness and market presence" },
      { name: "Engagement Ads", desc: "Interactive ads to boost user engagement" },
      { name: "Traffic Ads", desc: "Drive qualified traffic to your digital properties" }
    ]
  },
  {
    title: "Designing",
    icon: Palette,
    description: "Creative design solutions that captivate audiences and communicate your brand message.",
    services: [
      { name: "Graphic Designing", desc: "Professional graphics for marketing and branding" },
      { name: "Video Creation", desc: "Engaging video content for marketing and social media" },
      { name: "AI Designing (Video/Graphics)", desc: "AI-powered design solutions for rapid content creation" },
      { name: "UI/UX Designing", desc: "User-centered design for digital products and interfaces" }
    ]
  },
  {
    title: "Brand Building",
    icon: Lightbulb,
    description: "Strategic brand development to establish your unique market position.",
    services: [
      { name: "Marketing Consultation", desc: "Expert guidance for comprehensive marketing strategies" },
      { name: "Website Development", desc: "Custom websites that convert visitors into customers" }
    ]
  }
];

const ServicesPage = () => (
  <Layout>
    {/* Hero */}
    <section className="pt-32 pb-20 bg-gradient-to-br from-primary/[0.02] to-accent/[0.02]">
      <div className="container mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="text-sm font-display font-semibold text-accent uppercase tracking-wider">Our Expertise</span>
          <h1 className="text-hero font-display font-display text-foreground mt-4 mb-6">
            Strategic Digital Solutions That Drive Growth
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            From precision-targeted marketing campaigns to cutting-edge design solutions, 
            we deliver comprehensive services that transform your digital presence into a powerful growth engine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Get a Free Strategy Session <ArrowRight size={18} />
              </Button>
            </Link>
            <Link to="#services">
              <Button variant="outline" size="xl">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Services grid */}
    <SectionWrapper className="pt-0" id="services">
      <div className="space-y-16">
        {serviceCategories.map((category, i) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="text-center mb-10">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <category.icon size={32} className="text-accent" />
              </div>
              <h2 className="text-3xl font-display font-semibold text-foreground mb-4">{category.title}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{category.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service, j) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i * 0.1) + (j * 0.05) }}
                  className="bg-card rounded-2xl border border-primary/5 p-6 hover:shadow-premium-lg transition-all duration-500"
                >
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">{service.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
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
