import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Rocket, Briefcase, Phone } from "lucide-react";
import profileImage from "../../imports/Sivathasan_Tharshan.png";
import CounterAnimation from "./CounterAnimation";

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Software Architect",
    "AI Application Developer",
    "Digital Transformation Leader",
    "Financial Systems Specialist",
    "Technology Trainer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 via-transparent to-[#8b5cf6]/10" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative inline-block">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-full opacity-30 blur-2xl"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 border-4 border-transparent border-t-[#6366f1] border-r-[#8b5cf6] rounded-full"
              />
              <img
                src={profileImage}
                alt="S. Tharshan"
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover border-4 border-[#6366f1]/30 shadow-2xl shadow-[#6366f1]/20"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent mb-4">
                S. THARSHAN
              </h1>
              <p className="text-xl sm:text-2xl text-white/80 mb-4">
                Director – Systems Development & Training
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="h-16"
            >
              <motion.p
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent"
              >
                {roles[currentRole]}
              </motion.p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-base sm:text-lg text-white/70 leading-relaxed"
            >
              Technology leader with 14+ years of experience in large-scale system architecture,
              enterprise application development, artificial intelligence solutions, financial systems
              modernization, and digital transformation initiatives. Successfully designed and implemented
              nationwide enterprise platforms serving thousands of users while driving innovation through
              AI-powered applications and automation technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("#projects")}
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-full shadow-lg shadow-[#6366f1]/50 hover:shadow-[#6366f1]/70 transition-all"
              >
                <Rocket size={20} />
                View My Apps
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("#experience")}
                className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-[#6366f1]/30 rounded-full hover:bg-white/15 transition-all"
              >
                <Briefcase size={20} />
                View Experience
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("#contact")}
                className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-[#6366f1]/30 rounded-full hover:bg-white/15 transition-all"
              >
                <Phone size={20} />
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          <CounterAnimation end={2200} label="Organizations Reached" suffix="+" />
          <CounterAnimation end={14} label="Years Experience" suffix="+" />
          <CounterAnimation end={20} label="Systems Developed" suffix="+" />
          <CounterAnimation end={10} label="AI Applications" suffix="+" />
        </motion.div>
      </div>
    </section>
  );
}
