import { motion } from "motion/react";
import { Rocket, BarChart3, FileSearch, Bot, Zap } from "lucide-react";

export default function QuickLaunch() {
  const quickLinks = [
    {
      icon: Rocket,
      label: "Open AI Assistant",
      color: "from-[#6366f1] to-[#8b5cf6]",
      url: "#",
    },
    {
      icon: BarChart3,
      label: "Open Dashboard",
      color: "from-[#8b5cf6] to-[#a78bfa]",
      url: "#",
    },
    {
      icon: FileSearch,
      label: "Open Document Analyzer",
      color: "from-[#3b82f6] to-[#6366f1]",
      url: "#",
    },
    {
      icon: Bot,
      label: "Open Agent Platform",
      color: "from-[#a78bfa] to-[#6366f1]",
      url: "#",
    },
    {
      icon: Zap,
      label: "Open Automation Tool",
      color: "from-[#6366f1] to-[#3b82f6]",
      url: "#",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-[#6366f1] bg-clip-text text-transparent mb-4">
            Quick Launch
          </h2>
          <p className="text-white/70">Access your favorite tools instantly</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {quickLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={index}
                href={link.url}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-[#6366f1]/20 hover:border-[#6366f1]/40 transition-all group text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 to-[#8b5cf6]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 rounded-2xl shadow-lg shadow-[#6366f1]/0 group-hover:shadow-[#6366f1]/50 transition-all" />

                <div className="relative">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg shadow-[#6366f1]/30`}>
                    <Icon size={28} />
                  </div>
                  <p className="text-sm font-medium">{link.label}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
