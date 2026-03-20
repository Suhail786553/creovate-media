import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowRight, MessageCircle, Facebook, Instagram, PhoneCall } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <SectionWrapper className="bg-teal-950 text-white" id="contact">
      <SectionHeading title="Let's Grow Your Business" subtitle="Get a free consultation with our digital marketing experts." className="text-white" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Form Block */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10 shadow-premium-xl hover:shadow-premium-2xl transition-all duration-500 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full"></div>
            <h3 className="text-xl font-display font-semibold text-white mb-8 relative z-10">Send us a Message</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              <div className="space-y-2">
                <label className="text-xs font-display uppercase tracking-wider text-white/70 mb-2">Full Name</label>
                <input name="name" placeholder="John Doe" value={form.name} onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm text-white text-sm focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 font-body transition-all duration-300" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-display uppercase tracking-wider text-white/70 mb-2">Email Address</label>
                <input name="email" placeholder="john@example.com" value={form.email} onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm text-white text-sm focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 font-body transition-all duration-300" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              <div className="space-y-2">
                <label className="text-xs font-display uppercase tracking-wider text-white/70 mb-2">Phone Number</label>
                <input name="phone" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm text-white text-sm focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 font-body transition-all duration-300" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-display uppercase tracking-wider text-white/70 mb-2">Service</label>
                <select name="service" value={form.service} onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm text-white text-sm focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 font-body transition-all duration-300">
                  <option value="">Select Service</option>
                  <option>SEO & Digital Marketing</option>
                  <option>Social Media Marketing</option>
                  <option>Google Ads / PPC</option>
                  <option>Website Development</option>
                  <option>Branding & Design</option>
                  <option>Content Marketing</option>
                </select>
              </div>
            </div>
            <div className="space-y-2 relative z-10">
              <label className="text-xs font-display uppercase tracking-wider text-white/70 mb-2">Project Details</label>
              <textarea name="message" placeholder="Tell us about your project goals and requirements..." rows={4} value={form.message} onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm text-white text-sm focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 font-body resize-none transition-all duration-300" />
            </div>
            <Button variant="accent" size="xl" className="w-full sm:w-auto mt-8 relative z-10 group/brightness-110">
              <span className="flex items-center gap-2">
                <span>Send Message</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </motion.div>
        </div>

        {/* Contact Buttons Block */}
        <div className="lg:col-span-3">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-premium-xl hover:shadow-premium-2xl transition-all duration-500 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-br-full"></div>
            <h3 className="text-lg font-display font-semibold text-white mb-8 relative z-10">Quick Contact</h3>
            <div className="space-y-3 relative z-10">
              <a href="mailto:Creovatelko@gmail.com" className="group/item flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-white/5 via-white/10 to-white/5 hover:from-white/10 hover:via-white/20 hover:to-white/10 border border-white/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                  <Mail size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-display uppercase tracking-wider text-white/70 mb-1">Email</div>
                  <div className="text-white font-semibold text-sm group-hover/item:text-white transition-colors">Creovatelko@gmail.com</div>
                </div>
              </a>

              <a href="tel:+918528777528" className="group/item flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-white/5 via-white/10 to-white/5 hover:from-white/10 hover:via-white/20 hover:to-white/10 border border-white/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                  <PhoneCall size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-display uppercase tracking-wider text-white/70 mb-1">Call</div>
                  <div className="text-white font-semibold text-sm group-hover/item:text-white transition-colors">+91 8528777528</div>
                </div>
              </a>

              <a href="https://wa.me/918528777528" target="_blank" rel="noopener noreferrer" className="group/item flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-green-500/5 via-green-500/10 to-green-500/5 hover:from-green-500/10 hover:via-green-500/20 hover:to-green-500/10 border border-green-500/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-green-500/10 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                  <MessageCircle size={20} className="text-green-500" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-display uppercase tracking-wider text-white/70 mb-1">WhatsApp</div>
                  <div className="text-white font-semibold text-sm group-hover/item:text-green-500 transition-colors">Chat Now</div>
                </div>
              </a>

              <a href="https://facebook.com/creovatemedia" target="_blank" rel="noopener noreferrer" className="group/item flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-white/5 via-white/10 to-white/5 hover:from-white/10 hover:via-white/20 hover:to-white/10 border border-white/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                  <Facebook size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-display uppercase tracking-wider text-white/70 mb-1">Facebook</div>
                  <div className="text-white font-semibold text-sm group-hover/item:text-blue-500 transition-colors">Follow Us</div>
                </div>
              </a>

              <a href="https://instagram.com/creovatemedia" target="_blank" rel="noopener noreferrer" className="group/item flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-white/5 via-white/10 to-white/5 hover:from-white/10 hover:via-white/20 hover:to-white/10 border border-white/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                  <Instagram size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-display uppercase tracking-wider text-white/70 mb-1">Instagram</div>
                  <div className="text-white font-semibold text-sm group-hover/item:text-pink-500 transition-colors">Follow Us</div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Address Block */}
        <div className="lg:col-span-3">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-premium-xl hover:shadow-premium-2xl transition-all duration-500 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-br-full"></div>
            <div className="relative z-10">
              <div className="flex items-start gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-xs font-display uppercase tracking-wider text-white/70 mb-2">Office Address</div>
                  <div className="text-white font-semibold text-sm leading-relaxed">
                    3rd Floor, Experion Capital<br />
                    Vibhuti Khand, Gomtinagar<br />
                    Lucknow - 226010
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-white/5 via-white/10 to-white/5 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="text-xs font-display font-medium text-white">
                    Business Hours: Mon-Sat, 9AM-6PM
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
