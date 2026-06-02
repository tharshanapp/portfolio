import { motion } from "motion/react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export default function Qualifications() {
  const qualifications = [
    {
      icon: GraduationCap,
      title: "MSc Management & Information Technology",
      color: "from-[#6366f1] to-[#8b5cf6]",
    },
    {
      icon: Award,
      title: "Postgraduate Diploma in Public Administration",
      color: "from-[#8b5cf6] to-[#a78bfa]",
    },
    {
      icon: BookOpen,
      title: "BBA (Honours) Financial Management",
      color: "from-[#3b82f6] to-[#6366f1]",
    },
  ];

  return (
    <section id="qualifications" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8b5cf6]/5 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-[#8b5cf6] bg-clip-text text-transparent mb-4">
            Professional Qualifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {qualifications.map((qual, index) => {
            const Icon = qual.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-[#6366f1]/20 hover:border-[#6366f1]/40 transition-all group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 to-[#8b5cf6]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${qual.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-[#6366f1]/30`}>
                    <Icon size={32} />
                  </div>

                  <h3 className="text-lg font-semibold text-white/90">{qual.title}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
