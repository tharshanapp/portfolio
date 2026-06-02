import { motion } from "motion/react";
import { Sparkles, Bot, Zap, Database, Cpu, TrendingUp } from "lucide-react";

export default function AIApplications() {
  const aiSkills = [
    {
      icon: Sparkles,
      title: "IBM AI Developer Professional Certificate",
      status: "Certified",
      color: "from-[#6366f1] to-[#3b82f6]",
    },
    {
      icon: Bot,
      title: "AI Agent Developer Specialization",
      status: "Certified",
      color: "from-[#8b5cf6] to-[#6366f1]",
    },
    {
      icon: Zap,
      title: "Prompt Engineering",
      status: "Expert",
      color: "from-[#3b82f6] to-[#8b5cf6]",
    },
    {
      icon: Cpu,
      title: "Generative AI Application Development",
      status: "Certified",
      color: "from-[#a78bfa] to-[#6366f1]",
    },
    {
      icon: Database,
      title: "AI-Powered Workflow Automation",
      status: "Expert",
      color: "from-[#6366f1] to-[#8b5cf6]",
    },
    {
      icon: TrendingUp,
      title: "Data Science",
      status: "In Progress",
      color: "from-[#8b5cf6] to-[#a78bfa]",
    },
  ];

  return (
    <section id="ai-applications" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 via-[#8b5cf6]/10 to-transparent" />

      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#6366f1]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#8b5cf6]/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center shadow-2xl shadow-[#6366f1]/50"
          >
            <Sparkles size={40} />
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white via-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent mb-4">
            AI & Emerging Technology
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Leading the future of technology with cutting-edge AI solutions and automation
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-[#6366f1]/20 hover:border-[#6366f1]/40 transition-all group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 to-[#8b5cf6]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  className="absolute top-0 right-0 w-32 h-32 bg-[#6366f1]/10 rounded-full blur-2xl"
                />

                <div className="relative">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-[#6366f1]/30`}>
                    <Icon size={28} />
                  </div>

                  <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>

                  <div className="flex items-center gap-2">
                    <div className={`px-3 py-1 rounded-full text-xs ${
                      skill.status === "In Progress"
                        ? "bg-yellow-500/20 text-yellow-300"
                        : "bg-green-500/20 text-green-300"
                    }`}>
                      {skill.status}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
