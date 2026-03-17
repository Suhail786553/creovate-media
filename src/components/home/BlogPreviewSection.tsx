import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";

const categoryImages = {
  "SEO": {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&auto=format",
    overlay: "from-blue-900/80 to-purple-900/80"
  },
  "Social Media": {
    image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=800&h=400&fit=crop&auto=format",
    overlay: "from-pink-900/80 to-orange-900/80"
  },
  "Conversion": {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&auto=format",
    overlay: "from-green-900/80 to-teal-900/80"
  }
};

const blogs = [
  {
    title: "10 SEO Strategies That Actually Work in 2026",
    desc: "Discover the latest search optimization techniques that drive real organic growth.",
    category: "SEO",
  },
  {
    title: "The Ultimate Guide to Social Media ROI",
    desc: "Learn how to measure and maximize returns from your social media marketing efforts.",
    category: "Social Media",
  },
  {
    title: "Why Your Landing Pages Aren't Converting",
    desc: "Common conversion killers and data-backed fixes to boost your landing page performance.",
    category: "Conversion",
  },
];

const BlogPreviewSection = () => (
  <SectionWrapper className="bg-primary/[0.03]">
    <SectionHeading title="Latest Marketing Insights" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {blogs.map((b, i) => {
        const categoryConfig = categoryImages[b.category as keyof typeof categoryImages];
        
        return (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group bg-card rounded-3xl overflow-hidden border border-primary/5 hover:shadow-premium-lg transition-all duration-500"
          >
            <div className="h-48 relative overflow-hidden">
              <img 
                src={categoryConfig?.image} 
                alt={b.category}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${categoryConfig?.overlay || 'from-gray-900/80 to-gray-900/80'}`}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-display font-semibold uppercase tracking-wider text-white bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full">
                  {b.category}
                </span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-lg font-display font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                {b.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{b.desc}</p>
              <Link
                to="/blog"
                className="inline-flex items-center gap-1 text-accent font-display font-medium text-sm group-hover:gap-2 transition-all"
              >
                Read More <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        );
      })}
    </div>
  </SectionWrapper>
);

export default BlogPreviewSection;
