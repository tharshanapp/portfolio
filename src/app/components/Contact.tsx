import { motion } from "motion/react";
import { Mail, Phone, Linkedin, Github, Facebook, MessageSquare } from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "tharshan@example.com",
      href: "mailto:tharshan@example.com",
      color: "from-[#6366f1] to-[#8b5cf6]",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      color: "from-[#8b5cf6] to-[#a78bfa]",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "S. Tharshan",
      href: "https://linkedin.com",
      color: "from-[#3b82f6] to-[#6366f1]",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@stharshan",
      href: "https://github.com",
      color: "from-[#a78bfa] to-[#6366f1]",
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "S. Tharshan",
      href: "https://facebook.com",
      color: "from-[#6366f1] to-[#3b82f6]",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8b5cf6]/10 to-transparent" />

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6366f1]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8b5cf6]/20 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-6xl mb-4"
          >
            <MessageSquare className="w-16 h-16 mx-auto text-[#6366f1]" />
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white via-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-white/70">
            Let's discuss your next project or collaboration opportunity
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={index}
                href={method.href}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-[#6366f1]/20 hover:border-[#6366f1]/40 transition-all group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 to-[#8b5cf6]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 rounded-2xl shadow-lg shadow-[#6366f1]/0 group-hover:shadow-[#6366f1]/50 transition-all" />

                <div className="relative">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-[#6366f1]/30`}>
                    <Icon size={24} />
                  </div>

                  <h3 className="text-lg font-semibold mb-1">{method.label}</h3>
                  <p className="text-sm text-white/70">{method.value}</p>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-[#6366f1]/20 to-[#8b5cf6]/20 backdrop-blur-sm border border-[#6366f1]/30 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">Ready to Start a Project?</h3>
          <p className="text-white/70 mb-6">
            Whether you need enterprise solutions, AI applications, or digital transformation consulting,
            I'm here to help bring your vision to life.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-full shadow-lg shadow-[#6366f1]/50 hover:shadow-[#6366f1]/70 transition-all"
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
