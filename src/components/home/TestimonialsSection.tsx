import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";

const testimonials = [
  {
    name: "Proplyy.in",
    company: "Proplyy.in",
    review: "Creovate Media helped us bring clarity to our marketing efforts. Their understanding of real estate marketing and buyer behavior really stood out. The creatives and campaigns were well thought out and aligned with our business goals. We saw better engagement and more relevant enquiries."
  },
  {
    name: "Levana Group",
    company: "Levana Group",
    review: "We took this service from Creovate in between our project and saw double number of walk-in clients and pre filtered clients. God Bless."
  },
  {
    name: "IP Palace Hotel",
    company: "IP Palace Hotel",
    review: "I contacted Creovate for Banquet Promotions and saw increased bookings for corporate and birthday parties every week."
  },
  {
    name: "Opulense Interio",
    company: "Opulense Interio",
    review: "Professional, creative, and result-oriented. The team created high-quality creatives that truly reflected our brand identity. Their attention to detail and understanding of customer preferences helped us improve our overall digital presence."
  },
];

const TestimonialsSection = () => {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <SectionWrapper>
      <SectionHeading title="What Our Clients Say" />
      <div className="max-w-2xl mx-auto relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="bg-card rounded-3xl p-10 border border-primary/5 shadow-premium text-center"
          >
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-accent fill-accent" />
              ))}
            </div>
            <p className="text-foreground text-lg leading-relaxed mb-8 italic">
              "{testimonials[idx].review}"
            </p>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <span className="font-display font-semibold text-primary text-sm">
                {testimonials[idx].name.split(" ").map(w => w[0]).join("")}
              </span>
            </div>
            <div className="font-display font-semibold text-foreground">{testimonials[idx].name}</div>
            <div className="text-sm text-muted-foreground">{testimonials[idx].company}</div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-4 mt-8">
          <button onClick={prev} className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
            <ChevronLeft size={18} />
          </button>
          <button onClick={next} className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TestimonialsSection;
