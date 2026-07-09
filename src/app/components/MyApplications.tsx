import { motion } from "framer-motion"; // or "motion/react" depending on your setup
import { ExternalLink, Sparkles, TrendingUp, FileText, Package, Workflow } from "lucide-react";

export default function MyApplications() {
  const applications = [
    {
      icon: Sparkles,
      name: "AI Helpdesk Assistant",
      description: "AI-powered support assistant for user guidance and automated problem resolution.",
      tech: "OpenAI, React, Node.js",
      color: "from-[#6366f1] to-[#8b5cf6]",
      url: "https://gov-ai-assistant-lwfw3x642ru9spxrobuxbt.streamlit.app/",
    },
    {
      icon: TrendingUp,
      name: "Budget Forecasting System",
      description: "Financial forecasting and planning solution with predictive analytics.",
      tech: "Power BI, SQL Server, Python",
      color: "from-[#8b5cf6] to-[#a78bfa]",
    
      url: "https://gov-ai-assistant-lwfw3x642ru9spxrobuxbt.streamlit.app/",
    },
    {
      icon: FileText,
      name: "Document Intelligence Tool",
      description: "AI-powered document analysis and extraction application using advanced NLP.",
      tech: "GPT-4, Azure AI, React",
      color: "from-[#3b82f6] to-[#6366f1]",
      url: "#",
    },
    {
      icon: Package,
      name: "Asset Management Platform",
      description: "Enterprise asset tracking and management solution for large organizations.",
      tech: "ASP.NET, SQL Server, REST API",
      color: "from-[#a78bfa] to-[#6366f1]",
      url: "#",
    },
    {
      icon: Workflow,
      name: "Workflow Automation Tool",
      description: "Business process automation platform for streamlining organizational workflows.",
      tech: "Power Automate, AI Agents",
      color: "from-[#6366f1] to-[#3b82f6]",
      url: "#",
    },
  ];

  const handleButtonClick = (url, isPlaceholder) => {
    if (!isPlaceholder) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6366f1]/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-6xl mb-4"
          >
            🚀
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white via-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent mb-4">
            My Applications
          </h2>
          <p className="text-xl text-white/70">
            Explore the applications and AI solutions I have developed
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, index) => {
            const Icon = app.icon;
            const isPlaceholder = app.url === "#";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/20 to-[#8b5cf6]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-[#6366f1]/20 hover:border-[#6366f1]/40 transition-all overflow-hidden h-full flex flex-col justify-between">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#6366f1]/10 to-transparent rounded-full blur-2xl pointer-events-none" />

                  <div className="flex-grow">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-[#6366f1]/30`}>
                      <Icon size={32} />
                    </div>

                    <h3 className="text-xl font-semibold mb-2">{app.name}</h3>
                    <p className="text-sm text-white/70 mb-4">{app.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {app.tech.split(", ").map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs rounded-full bg-white/10 text-white/80 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* FIXED BUTTON - Using motion.button with whileHover/whileTap wrapper */}
                  <div>
                    <motion.button
                      type="button"
                      whileHover={!isPlaceholder ? { scale: 1.02 } : {}}
                      whileTap={!isPlaceholder ? { scale: 0.98 } : {}}
                      onClick={() => handleButtonClick(app.url, isPlaceholder)}
                      disabled={isPlaceholder}
                      className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all shadow-lg ${
                        isPlaceholder
                          ? "bg-white/10 text-white/40 cursor-not-allowed border border-white/5"
                          : "bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white shadow-[#6366f1]/30 hover:shadow-[#6366f1]/50 cursor-pointer"
                      }`}
                    >
                      {isPlaceholder ? "Coming Soon" : "Launch App"}
                      {!isPlaceholder && <ExternalLink size={16} />}
                    </motion.button>
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
