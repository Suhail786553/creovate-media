import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="bg-gray-100 text-gray-900">
    <div className="container mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Col 1 */}
        <div>
         <img src="/logo.png" alt="Creovate Media Logo" className="w-32 h-auto mb-4"></img>
          <p className="text-gray-600 text-sm leading-relaxed">
            A digital marketing agency helping businesses grow online through data-driven strategies,
            creative design, and measurable results.
          </p>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-gray-500">
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
                <Link to={l.path} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-gray-500">
            Services
          </h4>
          <ul className="space-y-3">
            {["SEO", "Social Media Marketing", "Google Ads", "Website Development"].map((s) => (
              <li key={s}>
                <Link to="/services" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 */}
        <div>
          <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-gray-500">
            Social Media
          </h4>
          <div className="flex flex-col space-y-3">
            <a href="https://instagram.com/creovatemedia" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://facebook.com/creovatemedia" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://linkedin.com/company/creovatemedia" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com/creovatemedia" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-16 pt-8 text-center">
        <p className="text-gray-500">
          2026 Creovate Media. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
