import Layout from "@/components/Layout";
import ContactSection from "@/components/home/ContactSection";
import { motion } from "framer-motion";

const ContactPage = () => (
  <Layout>
    <section className="pt-32 pb-8">
      <div className="container mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="text-sm font-display font-semibold text-accent uppercase tracking-wider">Contact</span>
          <h1 className="text-hero font-display font-displaytext-foreground mt-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mt-4">
            Ready to grow? Let's start a conversation.
          </p>
        </motion.div>
      </div>
    </section>
    <ContactSection />
  </Layout>
);

export default ContactPage;
