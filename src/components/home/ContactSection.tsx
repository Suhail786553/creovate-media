import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <SectionWrapper className="bg-primary/[0.03]" id="contact">
      <SectionHeading title="Let's Grow Your Business" subtitle="Get a free consultation with our digital marketing experts." />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7">
          <form className="bg-card rounded-3xl p-10 border border-primary/5 shadow-premium space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input name="name" placeholder="Name" value={form.name} onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl border border-primary/10 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 font-body" />
              <input name="email" placeholder="Email" value={form.email} onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl border border-primary/10 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 font-body" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl border border-primary/10 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 font-body" />
              <select name="service" value={form.service} onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl border border-primary/10 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 font-body">
                <option value="">Service Required</option>
                <option>SEO</option>
                <option>Social Media Marketing</option>
                <option>Google Ads / PPC</option>
                <option>Website Development</option>
                <option>Branding</option>
                <option>Content Marketing</option>
              </select>
            </div>
            <textarea name="message" placeholder="Tell us about your project..." rows={4} value={form.message} onChange={handleChange}
              className="w-full px-4 py-3.5 rounded-xl border border-primary/10 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 font-body resize-none" />
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              Initialize Strategy <ArrowRight size={18} />
            </Button>
          </form>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
          {[
            { icon: Mail, label: "Email", value: "Creovatelko@gmail.com" },
            { icon: Phone, label: "Phone", value: "+91 8528777528" },
            { icon: MapPin, label: "Office", value: "3rd Floor, Experion Capital\nVibhuti Khand, Gomtinagar\nLucknow - 226010" },
          ].map((c) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <c.icon size={20} className="text-accent" />
              </div>
              <div>
                <div className="text-xs font-display uppercase tracking-wider text-muted-foreground mb-1">{c.label}</div>
                <div className="text-foreground font-medium text-sm whitespace-pre-line">{c.value}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
