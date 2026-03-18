import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Lightbulb, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";

const values = [
  { icon: Target, title: "Results-Driven", desc: "Every strategy is measured against real business outcomes." },
  { icon: Eye, title: "Full Transparency", desc: "Real-time reporting and open communication at every step." },
  { icon: Lightbulb, title: "Strategic Innovation", desc: "We stay ahead of industry trends to keep you competitive." },
  { icon: Users, title: "True Partnership", desc: "We become an extension of your team, invested in your success." },
];

const AboutPage = () => (
  <Layout>
    {/* Hero */}
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7 }} 
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-sm font-display font-semibold text-accent uppercase tracking-wider">About Creovate</span>
          <h1 className="text-hero font-display font-display text-foreground mt-4 mb-6">
            We transform ambitious brands into digital leaders
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Creovate Media is a full-service digital marketing agency that combines data-driven strategy 
            with creative excellence. We help businesses dominate their digital landscape through innovative 
            SEO, compelling social media, targeted paid advertising, and conversion-focused web development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Start Your Growth Journey <ArrowRight size={18} />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="xl">
                Our Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Values */}
    <SectionWrapper className="bg-primary/[0.03]">
      <h2 className="text-section font-display font-semibold text-foreground mb-16 text-center">Our Values</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="text-center p-8"
          >
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <v.icon size={28} className="text-accent" />
            </div>
            <h3 className="text-lg font-display font-semibold text-foreground mb-2">{v.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>

    {/* Story */}
    <SectionWrapper>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-section font-display font-semibold text-foreground mb-6">Our Story</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Founded with the mission of making premium digital marketing accessible to growing businesses,
          Creovate Media has spent over 5 years refining a data-driven approach to online growth. We've
          completed 200+ projects and partnered with 120+ clients across industries.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-10">
          Our team of experienced strategists, designers, and developers work as a seamless unit — treating
          every client engagement as a partnership, not a transaction.
        </p>
        <Link to="/contact">
          <Button variant="hero" size="xl">
            Work With Us <ArrowRight size={18} />
          </Button>
        </Link>
      </div>
    </SectionWrapper>
  </Layout>
);

export default AboutPage;
