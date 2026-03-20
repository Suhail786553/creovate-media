import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const HeroSection = () => (
  <section className="min-h-[80vh] sm:min-h-[85vh] lg:min-h-[90vh] flex items-center pt-24 sm:pt-24 lg:pt-[72px] relative overflow-hidden">
    {/* Subtle background shapes */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -right-40 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full bg-secondary/10 blur-3xl" />
    </div>

    <div className="container mx-auto px-4 sm:px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Text - 7 cols */}
        <div className="lg:col-span-7 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            <span className="inline-block text-xs sm:text-sm font-display font-semibold text-accent tracking-wider uppercase mb-3 sm:mb-4">
              CREOVATE MEDIA
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-display font-semibold text-foreground mb-4 sm:mb-5 leading-tight">
              Running Ads Is Easy.<br />
              But Are They{" "}
              <span className="text-secondary">Actually</span> Building Your Business.
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md sm:max-w-lg mb-6 sm:mb-8">
              Turning Digital Campaigns into Real Results with Marketing Experience, Creativity and Right Technology!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Get Started <ArrowRight size={16} />
                </Button>
              </Link>
              <Link to="/services" className="w-full sm:w-auto">
                <Button variant="hero-outline" size="lg" className="w-full sm:w-auto">
                  Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Visual - 5 cols */}
        <motion.div
          className="lg:col-span-5 mt-12 lg:mt-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute inset-0 blur-xl -m-2 sm:-m-4" />
            <img
              src={heroDashboard}
              alt="Marketing analytics dashboard showing growth metrics"
              className="relative w-full h-auto max-h-[300px] sm:max-h-[400px] lg:max-h-none object-contain"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
