import { motion } from "motion/react";
import { Linkedin, Github, Facebook, Mail, Heart } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Mail, href: "mailto:tharshan@example.com", label: "Email" },
  ];

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-[#6366f1]/20">
      <div className="absolute inset-0 bg-gradient-to-t from-[#6366f1]/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent mb-2">
              S. THARSHAN
            </h3>
            <p className="text-white/70 text-sm italic">
              "Building Intelligent Solutions for Tomorrow"
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Experience", "Projects", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm text-white/60 hover:text-[#6366f1] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-white/5 border border-[#6366f1]/20 hover:border-[#6366f1]/40 flex items-center justify-center transition-all hover:bg-[#6366f1]/10"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#6366f1]/20 text-center">
          <p className="text-sm text-white/60 flex items-center justify-center gap-2">
            © {new Date().getFullYear()} S. Tharshan. Crafted with
            <Heart size={16} className="text-[#6366f1] fill-[#6366f1]" />
            and innovation.
          </p>
        </div>
      </div>
    </footer>
  );
}
