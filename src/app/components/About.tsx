import { motion } from "motion/react";
import { Brain, Zap, Target } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6366f1]/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-[#6366f1] bg-clip-text text-transparent mb-4">
            Transforming Ideas Into Intelligent Digital Solutions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-[#6366f1]/20 hover:border-[#6366f1]/40 transition-all group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Brain size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation Leader</h3>
              <p className="text-white/70">
                Experienced software developer and technology leader specializing in enterprise application
                development, large-scale system implementation, and artificial intelligence.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-[#6366f1]/20 hover:border-[#6366f1]/40 transition-all group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#8b5cf6] to-[#6366f1] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Digital Transformation</h3>
              <p className="text-white/70">
                Passionate about leveraging emerging technologies to improve efficiency, decision-making,
                and service delivery through innovative digital solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-[#6366f1]/20 hover:border-[#6366f1]/40 transition-all group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Target size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Workflow Automation</h3>
              <p className="text-white/70">
                Expert in workflow automation and financial technology solutions, delivering systems that
                streamline operations and enhance organizational performance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
