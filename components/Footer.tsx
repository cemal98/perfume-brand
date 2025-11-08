"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  const footerLinks = [
    { name: "About", href: "#about" },
    { name: "Collection", href: "#collection" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy", href: "#privacy" },
  ];

  return (
    <footer className="bg-luxury-black border-t border-luxury-gold/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Tagline */}
          <div>
            <motion.h2
              className="text-2xl font-serif text-luxury-gold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Pugarlov
            </motion.h2>
            <p className="text-luxury-beige/70 text-sm">
              Timeless fragrance for the modern connoisseur.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-luxury-gold mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-luxury-beige/70 hover:text-luxury-gold transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-luxury-gold mb-4 font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="text-luxury-beige/70 hover:text-luxury-gold transition-colors"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-luxury-gold/20 text-center">
          <p className="text-luxury-beige/50 text-sm">
            © {new Date().getFullYear()} Pugarlov. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

