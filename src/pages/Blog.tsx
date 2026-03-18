import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";

const categoryImages = {
  "SEO": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&auto=format",
  "Social Media": "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=800&h=400&fit=crop&auto=format",
  "Conversion": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&auto=format",
  "PPC": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop&auto=format",
  "Content": "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop&auto=format",
  "Branding": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=400&fit=crop&auto=format"
};

const posts = [
  { title: "10 SEO Strategies That Actually Work in 2026", desc: "Discover the latest search optimization techniques that drive real organic growth and sustainable rankings.", category: "SEO", date: "Mar 10, 2026" },
  { title: "The Ultimate Guide to Social Media ROI", desc: "Learn how to measure and maximize returns from your social media marketing efforts across platforms.", category: "Social Media", date: "Mar 5, 2026" },
  { title: "Why Your Landing Pages Aren't Converting", desc: "Common conversion killers and data-backed fixes to boost your landing page performance immediately.", category: "Conversion", date: "Feb 28, 2026" },
  { title: "PPC Budget Optimization: A Framework", desc: "How to allocate and optimize your paid advertising budget for maximum return on investment.", category: "PPC", date: "Feb 20, 2026" },
  { title: "Building a Content Strategy From Scratch", desc: "A step-by-step guide to creating a content marketing strategy that drives traffic and builds authority.", category: "Content", date: "Feb 14, 2026" },
  { title: "Brand Identity: More Than Just a Logo", desc: "Why comprehensive brand identity matters and how to build one that resonates with your audience.", category: "Branding", date: "Feb 8, 2026" },
];

const BlogPage = () => (
  <Layout>
    <section className="pt-32">
      <div className="container mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="text-sm font-display font-semibold text-accent uppercase tracking-wider">Blog</span>
          <h1 className="text-hero font-display font-display text-foreground mt-4">Marketing Insights</h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mt-4">
            Actionable strategies and industry perspectives from our team.
          </p>
        </motion.div>
      </div>
    </section>

    <SectionWrapper className="pt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="group bg-card rounded-3xl overflow-hidden border border-primary/5 hover:shadow-premium-lg transition-all duration-500"
          >
            <div className="h-48 relative overflow-hidden">
              <img 
                src={categoryImages[p.category as keyof typeof categoryImages]} 
                alt={p.category}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="text-xs font-display font-semibold uppercase tracking-wider text-white bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  {p.category}
                </span>
              </div>
            </div>
            <div className="p-8">
              <div className="text-xs text-muted-foreground mb-3">{p.date}</div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
              <Link to="#" className="inline-flex items-center gap-1 text-accent font-display font-medium text-sm group-hover:gap-2 transition-all">
                Read More <ArrowRight size={14} />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  </Layout>
);

export default BlogPage;
