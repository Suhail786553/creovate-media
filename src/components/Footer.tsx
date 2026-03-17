import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Col 1 */}
        <div>
          <h3 className="font-display text-xl font-bold mb-4">
            Creovate<span className="text-accent">.</span>Media
          </h3>
          <p className="text-primary-foreground/60 text-sm leading-relaxed">
            A digital marketing agency helping businesses grow online through data-driven strategies,
            creative design, and measurable results.
          </p>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/40">
            Company
          </h4>
          <ul className="space-y-3">
            {[
              { name: "About", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Blog", path: "/blog" },
              { name: "Contact", path: "/contact" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/40">
            Services
          </h4>
          <ul className="space-y-3">
            {["SEO", "Social Media Marketing", "Google Ads", "Website Development"].map((s) => (
              <li key={s}>
                <Link to="/services" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 */}
        <div>
          <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/40">
            Social Media
          </h4>
          <ul className="space-y-3">
            {["Instagram", "LinkedIn", "Facebook"].map((s) => (
              <li key={s}>
                <a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-16 pt-8 text-center">
        <p className="text-sm text-primary-foreground/40">
          © 2026 Creovate Media. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
