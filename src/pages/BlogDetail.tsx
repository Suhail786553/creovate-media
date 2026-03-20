import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";

const blogContent = {
  "why-most-ads-dont-generate-leads": {
    title: "Why Most Ads Don't Generate Leads (Even with Good Budget)",
    category: "Lead Generation",
    date: "Mar 18, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1559028006-848b6b04d6c3?ixlib=rb-4.0.3&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80",
    content: [
      {
        type: "heading",
        text: "Introduction"
      },
      {
        type: "paragraph",
        text: "Running ads today is easier than ever, but many businesses still struggle to generate quality leads. The digital advertising landscape has become increasingly competitive, and simply having a budget is no longer enough to guarantee results."
      },
      {
        type: "heading",
        text: "The Real Problem"
      },
      {
        type: "paragraph",
        text: "Most campaigns focus on execution rather than strategy, leading to poor targeting and generic messaging. Businesses often jump straight to creating ads without first understanding their audience, crafting a compelling offer, or developing a proper funnel strategy."
      },
      {
        type: "paragraph",
        text: "This execution-first approach results in ads that look professional but fail to connect with the right audience or communicate genuine value. The consequence is wasted ad spend and frustratingly low conversion rates."
      },
      {
        type: "heading",
        text: "What Works"
      },
      {
        type: "paragraph",
        text: "Audience understanding, high-impact creatives, and proper funnel strategy drive real results. Successful campaigns start with deep research into your target market's pain points, desires, and decision-making processes."
      },
      {
        type: "paragraph",
        text: "High-impact creatives go beyond attractive designs – they speak directly to your audience's needs and emotions. They address specific problems and present clear solutions that resonate with the viewer's current situation."
      },
      {
        type: "paragraph",
        text: "A proper funnel strategy ensures that each ad serves a specific purpose in the customer journey, from awareness to consideration to conversion. This systematic approach maximizes the effectiveness of every dollar spent."
      },
      {
        type: "heading",
        text: "Conclusion"
      },
      {
        type: "paragraph",
        text: "Tools help run ads, but strategy delivers outcomes. The businesses that succeed in today's competitive landscape are those that prioritize strategic thinking over tactical execution. They understand that great advertising is less about the platform and more about the psychology of their audience."
      }
    ]
  },
  "generate-leads-competitive-markets": {
    title: "How to Generate Leads in Competitive Markets Like Lucknow",
    category: "Lead Generation",
    date: "Mar 17, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80",
    content: [
      {
        type: "heading",
        text: "Introduction"
      },
      {
        type: "paragraph",
        text: "Competitive markets demand smarter marketing, not just higher budgets. In cities like Lucknow, where multiple businesses compete for the same audience, standing out requires strategic differentiation and deep local market understanding."
      },
      {
        type: "heading",
        text: "The Challenge"
      },
      {
        type: "paragraph",
        text: "Many businesses use similar creatives and targeting, making it hard to stand out. When everyone is running the same type of ads with similar messaging, potential customers become desensitized and engagement rates drop significantly."
      },
      {
        type: "paragraph",
        text: "This sameness in marketing approach creates a race to the bottom where only the biggest budgets win, leaving smaller businesses struggling to compete effectively."
      },
      {
        type: "heading",
        text: "What Works"
      },
      {
        type: "paragraph",
        text: "Local insights, differentiated creatives, and intent-based targeting improve results. Understanding the unique cultural nuances, seasonal patterns, and local preferences in markets like Lucknow gives you a significant advantage over generic national campaigns."
      },
      {
        type: "paragraph",
        text: "Differentiated creatives that speak to local pain points and aspirations create stronger connections with your audience. When your messaging reflects an understanding of their specific context, they're more likely to engage and convert."
      },
      {
        type: "paragraph",
        text: "Intent-based targeting focuses on users who are actively searching for solutions rather than broad demographic groups. This precision approach ensures your ad spend reaches people most likely to convert."
      },
      {
        type: "heading",
        text: "Conclusion"
      },
      {
        type: "paragraph",
        text: "Smart strategy beats high spending. In competitive markets, the winner isn't always the business with the biggest budget – it's often the one with the deepest understanding of their local market and the most strategic approach to reaching them."
      }
    ]
  },
  "high-converting-ad-creative": {
    title: "What Makes a High-Converting Ad Creative?",
    category: "Conversion",
    date: "Mar 16, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80",
    content: [
      {
        type: "heading",
        text: "Introduction"
      },
      {
        type: "paragraph",
        text: "Creatives are the first interaction with your audience. In a world where consumers are bombarded with thousands of ads daily, your creative needs to capture attention immediately and communicate value within seconds."
      },
      {
        type: "heading",
        text: "Common Mistake"
      },
      {
        type: "paragraph",
        text: "Many designs look good but fail to communicate value. Businesses often focus on creating visually appealing ads without considering whether the design actually drives action. Beautiful doesn't equal effective when it comes to advertising."
      },
      {
        type: "paragraph",
        text: "The gap between aesthetic appeal and functional effectiveness is where most ad campaigns fail. A creative that looks great but doesn't convert is just expensive art, not effective marketing."
      },
      {
        type: "heading",
        text: "What Works"
      },
      {
        type: "paragraph",
        text: "Clear messaging, strong hooks, relevance, and strong CTA drive conversions. Your creative should immediately answer the viewer's question: 'What's in it for me?'"
      },
      {
        type: "paragraph",
        text: "Strong hooks grab attention within the first three seconds – whether through compelling visuals, intriguing questions, or surprising statements. Once you have their attention, clear messaging must quickly communicate your value proposition."
      },
      {
        type: "paragraph",
        text: "Relevance ensures your creative speaks to the viewer's current situation or needs. When people feel an ad understands their specific problem, they're more likely to engage with your solution."
      },
      {
        type: "paragraph",
        text: "A strong call-to-action removes friction and tells the viewer exactly what to do next. Whether it's 'Learn More,' 'Get Started,' or 'Book Now,' your CTA should be clear, compelling, and easy to follow."
      },
      {
        type: "heading",
        text: "Conclusion"
      },
      {
        type: "paragraph",
        text: "Effective creatives combine design with intent. The most successful ad creatives balance visual appeal with psychological triggers, emotional resonance, and clear communication of value. They don't just look good – they drive action."
      }
    ]
  },
  "running-ads-isnt-enough": {
    title: "Running Ads Isn't Enough — Here's What Actually Drives Sales",
    category: "Conversion",
    date: "Mar 15, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80",
    content: [
      {
        type: "heading",
        text: "Introduction"
      },
      {
        type: "paragraph",
        text: "Ads alone do not guarantee sales. Many businesses make the mistake of thinking that running ads is the complete solution to their growth challenges, but advertising is just one piece of a much larger puzzle."
      },
      {
        type: "heading",
        text: "Reality"
      },
      {
        type: "paragraph",
        text: "Strategy, positioning, and customer journey matter. An ad can bring traffic to your website, but if your positioning is unclear, your offer isn't compelling, or your customer journey is confusing, that traffic won't convert into sales."
      },
      {
        type: "paragraph",
        text: "The customer journey encompasses every touchpoint a potential customer has with your business – from first awareness to post-purchase follow-up. Each touchpoint must be optimized to guide the customer toward conversion."
      },
      {
        type: "heading",
        text: "What Works"
      },
      {
        type: "paragraph",
        text: "Right offer, consistent optimization, and complete funnel deliver real growth. Your offer must be irresistible and clearly communicate the value you provide. It should solve a specific problem for a specific audience."
      },
      {
        type: "paragraph",
        text: "Consistent optimization means continuously testing and improving every element of your marketing – from ad creatives to landing pages to email sequences. Small improvements compound over time to create significant results."
      },
      {
        type: "paragraph",
        text: "A complete funnel ensures that you have systems in place to capture leads, nurture relationships, and convert prospects into customers. This systematic approach eliminates reliance on any single marketing channel or tactic."
      },
      {
        type: "heading",
        text: "Conclusion"
      },
      {
        type: "paragraph",
        text: "Growth comes from systems, not just ads. Businesses that achieve sustainable growth understand that advertising is a tool, not a strategy. The real magic happens when you combine ads with strategic positioning, compelling offers, and systematic customer journey optimization."
      }
    ]
  },
  "sell-event-tickets-instagram": {
    title: "How to Sell Event Tickets Using Instagram Ads",
    category: "Social Media",
    date: "Mar 14, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80",
    content: [
      {
        type: "heading",
        text: "Introduction"
      },
      {
        type: "paragraph",
        text: "Event marketing requires creating urgency and excitement. Unlike products that can be purchased anytime, event tickets have a built-in deadline that can be leveraged to drive immediate action and create FOMO (Fear Of Missing Out)."
      },
      {
        type: "heading",
        text: "Strategy"
      },
      {
        type: "paragraph",
        text: "Use hype, engagement, and conversion phases. A successful event ticket sales campaign on Instagram follows a strategic progression that builds momentum over time, rather than trying to sell all tickets at once."
      },
      {
        type: "paragraph",
        text: "The hype phase focuses on building awareness and anticipation through teaser content, behind-the-scenes glimpses, and influencer partnerships. This phase creates curiosity and establishes your event as something worth attending."
      },
      {
        type: "paragraph",
        text: "The engagement phase encourages interaction through polls, Q&A sessions, and user-generated content campaigns. This builds community and makes potential attendees feel invested in the event before they even buy tickets."
      },
      {
        type: "paragraph",
        text: "The conversion phase shifts focus to direct sales with clear calls-to-action, limited-time offers, and testimonials from early ticket purchasers."
      },
      {
        type: "heading",
        text: "Key Tips"
      },
      {
        type: "paragraph",
        text: "Scarcity, early bird pricing, and retargeting improve sales. Limited ticket quantities create urgency and make potential buyers act faster to avoid missing out."
      },
      {
        type: "paragraph",
        text: "Early bird pricing rewards quick decision-makers and creates a sense of getting a special deal. This strategy often drives the initial burst of ticket sales that builds social proof."
      },
      {
        type: "paragraph",
        text: "Retargeting campaigns focus on people who have shown interest but haven't purchased yet – those who visited your event page, engaged with your posts, or watched your videos. These warm leads are more likely to convert with the right messaging."
      },
      {
        type: "heading",
        text: "Conclusion"
      },
      {
        type: "paragraph",
        text: "Strong strategy makes ticket sales predictable. By implementing a systematic approach to Instagram advertising for events, you can create reliable sales funnels that consistently fill venues and maximize event revenue."
      }
    ]
  }
};

const BlogDetailPage = () => {
  const { slug } = useParams();
  const blog = blogContent[slug as keyof typeof blogContent];

  if (!blog) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
            <Link to="/blog">
              <Button>Back to Blog</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto"
          >
            <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
              <ArrowLeft size={16} />
              Back to Blog
            </Link>
            
            <div className="text-center mb-8">
              <span className="text-sm font-display font-semibold text-accent uppercase tracking-wider">
                {blog.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-semibold text-foreground mt-4 mb-6">
                {blog.title}
              </h1>
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  {blog.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} />
                  {blog.readTime}
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden mb-12">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <SectionWrapper className="pt-0">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="prose prose-lg max-w-none">
            {blog.content.map((section, index) => {
              if (section.type === 'heading') {
                return (
                  <h2 key={index} className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">
                    {section.text}
                  </h2>
                );
              }
              if (section.type === 'paragraph') {
                return (
                  <p key={index} className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {section.text}
                  </p>
                );
              }
              return null;
            })}
          </div>

          {/* Author Section */}
          <div className="mt-16 pt-8 border-t border-primary/10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="font-display font-semibold text-accent">CM</span>
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">Creovate Media</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Digital marketing experts helping businesses grow through strategic advertising and conversion optimization.
                </p>
              </div>
            </div>
          </div>
        </motion.article>
      </SectionWrapper>

      {/* Related Posts */}
      <SectionWrapper className="pt-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-semibold text-foreground mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.values(blogContent)
              .filter(post => post.category === blog.category && post.title !== blog.title)
              .slice(0, 2)
              .map((relatedPost, index) => (
                <Link
                  key={index}
                  to={`/blog/${Object.keys(blogContent).find(key => blogContent[key as keyof typeof blogContent] === relatedPost)}`}
                  className="group bg-card rounded-2xl p-6 border border-primary/5 hover:shadow-premium-lg transition-all duration-500"
                >
                  <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {relatedPost.content[0].text}
                  </p>
                  <div className="flex items-center gap-2 text-accent text-sm font-medium">
                    Read More <ArrowRight size={14} />
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default BlogDetailPage;
