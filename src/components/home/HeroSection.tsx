import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const HeroSection = () => (
  <section className="min-h-[90vh] flex items-center pt-24 lg:pt-[72px] relative overflow-hidden">
    {/* Subtle background shapes */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-3xl" />
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text - 7 cols */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            <span className="inline-block text-xs font-display font-semibold text-accent tracking-wider uppercase mb-4">
              CREOVATE MEDIA
            </span>
            <h1 className="text-4xl lg:text-5xl font-display font-semibold text-foreground mb-5 leading-tight">
              Running Ads Is Easy.<br />
              But Are They{" "}
              <span className="text-secondary">Actually</span> Building Your Business.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-lg mb-8">
             Turning Digital Campaigns into Real Results with Marketing Experience, Creativity and Right Technology !!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Get Started <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="hero-outline" size="xl">
                  Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Visual - 5 cols */}
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-accent/10 rounded-3xl blur-2xl -m-4" />
            <img
              src={heroDashboard}
              alt="Marketing analytics dashboard showing growth metrics"
              className="relative rounded-3xl shadow-premium-lg w-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
