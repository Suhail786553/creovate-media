import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";

const testimonials = [
  {
    name: "Sarah Mitchell",
    company: "Nexora Technologies",
    review: "Creovate Media transformed our online presence. Within 6 months, our organic traffic increased by 180% and lead generation doubled.",
  },
  {
    name: "James Chen",
    company: "Bridgepoint Capital",
    review: "Their data-driven approach to PPC delivered a 340% ROI. The team's expertise and transparent reporting make them an invaluable partner.",
  },
  {
    name: "Emily Rodriguez",
    company: "Streamline Solutions",
    review: "From social media strategy to website redesign, Creovate handled everything seamlessly. Our brand perception has never been stronger.",
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
