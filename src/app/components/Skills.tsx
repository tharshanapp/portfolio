import { motion } from "motion/react";
import { Code2, Brain, Database, Network } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Software Development",
      color: "from-[#6366f1] to-[#3b82f6]",
      skills: ["ASP.NET", "VB.NET", "C#", "SQL Server", "REST APIs"],
    },
    {
      icon: Brain,
      title: "AI & Automation",
      color: "from-[#8b5cf6] to-[#6366f1]",
      skills: ["Generative AI", "AI Agents", "Prompt Engineering", "OpenAI Integration", "Workflow Automation"],
    },
    {
      icon: Database,
      title: "Data & Analytics",
      color: "from-[#3b82f6] to-[#8b5cf6]",
      skills: ["Power BI", "Data Analysis", "Excel Advanced Analytics", "Forecasting"],
    },
    {
      icon: Network,
      title: "Architecture",
      color: "from-[#a78bfa] to-[#6366f1]",
      skills: ["Enterprise Architecture", "System Design", "Cloud Integration", "Digital Transformation"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6366f1]/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-[#6366f1] bg-clip-text text-transparent mb-4">
            Technical Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-[#6366f1]/20 hover:border-[#6366f1]/40 transition-all group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>

                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                        className="text-sm text-white/70 flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6]" />
                        {skill}
                      </motion.div>
                    ))}
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
