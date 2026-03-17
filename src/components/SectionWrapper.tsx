import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
}

const SectionWrapper = ({ children, className = "", id }: Props) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    className={`py-24 md:py-32 ${className}`}
  >
    <div className="container mx-auto px-6">{children}</div>
  </motion.section>
);

export default SectionWrapper;
