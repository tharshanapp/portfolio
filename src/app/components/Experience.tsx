import { motion } from "motion/react";
import { Building2, Calendar, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const highlights = [
    "Led development of large-scale financial management platforms",
    "Implemented enterprise systems across thousands of organizational units",
    "Developed treasury, asset management, and financial reporting solutions",
    "Managed nationwide user training and implementation programs",
    "Designed payment processing and workflow automation systems",
    "Directed software architecture and digital transformation initiatives",
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8b5cf6]/5 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-[#8b5cf6] bg-clip-text text-transparent mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6366f1] via-[#8b5cf6] to-[#6366f1]" />

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-20 pb-12"
          >
            <div className="absolute left-4 top-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center shadow-lg shadow-[#6366f1]/50">
              <Building2 size={16} />
            </div>

            <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-[#6366f1]/20 hover:border-[#6366f1]/40 transition-all group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 to-[#8b5cf6]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold">Director – Systems Development & Training</h3>
                </div>

                <div className="flex items-center gap-2 text-white/60 mb-6">
                  <Calendar size={16} />
                  <span>2011 – Present</span>
                </div>

                <div className="space-y-3">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 text-white/80"
                    >
                      <CheckCircle2 size={20} className="text-[#6366f1] flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
