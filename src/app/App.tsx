import AIPopup from "./components/AIPopup";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Qualifications from "./components/Qualifications";
import AIApplications from "./components/AIApplications";
import MyApplications from "./components/MyApplications";
import QuickLaunch from "./components/QuickLaunch";
import InternationalExposure from "./components/InternationalExposure";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#0a0a1a] flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            className="w-16 h-16 border-4 border-[#6366f1] border-t-transparent rounded-full mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <h2 className="text-xl text-white">Loading Portfolio...</h2>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative bg-[#0a0a1a] text-white overflow-x-hidden">
      <ParticleBackground />
      <Navigation />

      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Qualifications />
        <AIApplications />
        <MyApplications />
        <QuickLaunch />
        <InternationalExposure />
        <Contact />
      </main>

      <Footer />

<ParticleBackground />
    <Navigation />
    <main>...</main>
    <Footer />
    
    {/* Add AI Popup here */}
    <AIPopup />

    </div>
  );
}
