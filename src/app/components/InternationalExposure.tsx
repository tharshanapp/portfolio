import { motion } from "motion/react";
import { MapPin, Globe } from "lucide-react";

export default function InternationalExposure() {
  const locations = [
    { name: "Singapore", x: 70, y: 55 },
    { name: "Hong Kong", x: 72, y: 50 },
    { name: "Australia", x: 78, y: 75 },
    { name: "China", x: 70, y: 45 },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6366f1]/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Globe className="w-16 h-16 mx-auto mb-4 text-[#6366f1]" />
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-[#6366f1] bg-clip-text text-transparent mb-4">
            International Exposure
          </h2>
          <p className="text-xl text-white/70">Training and workshops across the globe</p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] mx-auto rounded-full mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative p-8 sm:p-12 rounded-2xl bg-white/5 backdrop-blur-sm border border-[#6366f1]/20 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 to-[#8b5cf6]/10" />

          <div className="relative aspect-video rounded-xl bg-[#0a0a1a]/50 border border-[#6366f1]/20 overflow-hidden">
            <svg viewBox="0 0 100 60" className="w-full h-full">
              <defs>
                <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              <path
                d="M10,20 L15,18 L20,22 L25,20 L30,25 L35,23 L40,28 L45,25 L50,30 L55,28 L60,32 L65,30 L70,35 L75,33 L80,38 L85,35 L90,40"
                fill="none"
                stroke="url(#mapGradient)"
                strokeWidth="0.2"
              />

              {locations.map((location, index) => (
                <g key={index}>
                  <motion.line
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    x1="50"
                    y1="30"
                    x2={location.x}
                    y2={location.y}
                    stroke="#6366f1"
                    strokeWidth="0.3"
                    strokeDasharray="1,1"
                  />

                  <motion.circle
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.2 + 1 }}
                    cx={location.x}
                    cy={location.y}
                    r="1.5"
                    fill="#6366f1"
                  >
                    <animate
                      attributeName="r"
                      values="1.5;2.5;1.5"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </motion.circle>

                  <motion.circle
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.2 + 1 }}
                    cx={location.x}
                    cy={location.y}
                    r="3"
                    fill="none"
                    stroke="#6366f1"
                    strokeWidth="0.3"
                    opacity="0.5"
                  >
                    <animate
                      attributeName="r"
                      values="3;5;3"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.5;0;0.5"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </motion.circle>
                </g>
              ))}

              <motion.circle
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                cx="50"
                cy="30"
                r="2"
                fill="#8b5cf6"
              />
            </svg>
          </div>

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 1.5 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-[#6366f1]/20 hover:border-[#6366f1]/40 transition-all"
              >
                <MapPin size={18} className="text-[#6366f1] flex-shrink-0" />
                <span className="text-sm">{location.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
