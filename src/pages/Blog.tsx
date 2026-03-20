import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";

const categoryImages = {
  "Lead Generation": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&auto=format",

 "Social Media": "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?auto=format&fit=crop&w=800&q=60",

  "Conversion": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=60",

  "PPC": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",

  "Content": "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=60",

  "Branding": "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=60",
};
const posts = [
  { title: "Why Most Ads Don't Generate Leads (Even with Good Budget)", desc: "Running ads today is easier than ever, but many businesses still struggle to generate quality leads. Most campaigns focus on execution rather than strategy, leading to poor targeting and generic messaging.", category: "Social Media", date: "Mar 18, 2026" },
  { title: "How to Generate Leads in Competitive Markets Like Lucknow", desc: "Competitive markets demand smarter marketing, not just higher budgets. Many businesses use similar creatives and targeting, making it hard to stand out. Local insights and differentiated creatives improve results.", category: "Lead Generation", date: "Mar 17, 2026" },
  { title: "What Makes a High-Converting Ad Creative?", desc: "Creatives are the first interaction with your audience. Many designs look good but fail to communicate value. Clear messaging, strong hooks, relevance, and strong CTA drive conversions.", category: "Conversion", date: "Mar 16, 2026" },
  { title: "Running Ads Isn't Enough — Here's What Actually Drives Sales", desc: "Ads alone do not guarantee sales. Strategy, positioning, and customer journey matter. Right offer, consistent optimization, and complete funnel deliver real growth.", category: "PPC", date: "Mar 15, 2026" },
  { title: "How to Sell Event Tickets Using Instagram Ads", desc: "Event marketing requires creating urgency and excitement. Use hype, engagement, and conversion phases. Scarcity, early bird pricing, and retargeting improve ticket sales.", category: "Content", date: "Mar 14, 2026" },
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
              <Link to={`/blog/${p.title.toLowerCase()
                .replace(/[^a-z0-9\s-]/g, '')
                .replace(/\s+/g, '-')
                .replace(/-+/g, '-')
                .trim()
                .replace(/why-most-ads-dont-generate-leads-even-with-good-budget/, 'why-most-ads-dont-generate-leads')
                .replace(/how-to-generate-leads-in-competitive-markets-like-lucknow/, 'generate-leads-competitive-markets')
                .replace(/what-makes-a-high-converting-ad-creative/, 'high-converting-ad-creative')
                .replace(/running-ads-isnt-enough-heres-what-actually-drives-sales/, 'running-ads-isnt-enough')
                .replace(/how-to-sell-event-tickets-using-instagram-ads/, 'sell-event-tickets-instagram')
              }`} className="inline-flex items-center gap-1 text-accent font-display font-medium text-sm group-hover:gap-2 transition-all">
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
