import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Qualifications", href: "#qualifications" },
    { name: "AI Applications", href: "#ai-applications" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0a0a1a]/80 backdrop-blur-lg border-b border-[#6366f1]/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent cursor-pointer"
              onClick={() => scrollToSection("#home")}
            >
              S. THARSHAN
            </motion.div>

            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-2 text-sm text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  {item.name}
                </motion.button>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("#projects")}
                className="ml-4 px-6 py-2 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-full text-sm shadow-lg shadow-[#6366f1]/50 hover:shadow-[#6366f1]/70 transition-all"
              >
                🚀 Launch Apps
              </motion.button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          className="fixed inset-0 z-40 bg-[#0a0a1a]/95 backdrop-blur-lg lg:hidden"
        >
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.1 }}
                onClick={() => scrollToSection(item.href)}
                className="text-xl text-white/80 hover:text-white transition-colors"
              >
                {item.name}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => scrollToSection("#projects")}
              className="px-8 py-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-full shadow-lg shadow-[#6366f1]/50"
            >
              🚀 Launch Apps
            </motion.button>
          </div>
        </motion.div>
      )}
    </>
  );
}
