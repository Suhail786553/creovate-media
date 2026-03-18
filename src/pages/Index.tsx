import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import WhyDigitalSection from "@/components/home/WhyDigitalSection";
import ClientsSection from "@/components/home/ClientsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BlogPreviewSection from "@/components/home/BlogPreviewSection";
import FAQSection from "@/components/home/FAQSection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => (
  <Layout>
    <HeroSection />
    <ServicesSection />
    <WhyChooseSection />
    {/* <WhyDigitalSection /> */}
    <ClientsSection />
    <TestimonialsSection />
    <BlogPreviewSection />
    <ContactSection />
    <FAQSection />
  </Layout>
);

export default Index;
