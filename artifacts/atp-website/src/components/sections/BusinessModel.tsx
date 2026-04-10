import { motion } from "framer-motion";
import { Lightbulb, Layers, TrendingUp, Cpu, HeartHandshake } from "lucide-react";

const values = [
  {
    title: "Innovation with Cost Effectiveness",
    description: "Delivering advanced solutions without compromising your bottom line.",
    icon: Lightbulb
  },
  {
    title: "Cutting-edge NGN Technology",
    description: "Next-Generation Network architectures ready for tomorrow's challenges.",
    icon: Cpu
  },
  {
    title: "Reliable & Scalable Solutions",
    description: "Infrastructure that grows seamlessly as your enterprise expands.",
    icon: Layers
  },
  {
    title: "ROI-Focused (CAPEX/OPEX)",
    description: "Strategic models designed to optimize both capital and operational expenditures.",
    icon: TrendingUp
  },
  {
    title: "Proactive & Reactive Services",
    description: "Comprehensive support ensuring maximum uptime and rapid issue resolution.",
    icon: HeartHandshake
  }
];

export function BusinessModel() {
  return (
    <section className="py-24 md:py-32 bg-slate-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="sticky top-32">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight leading-tight">
                Our Value <span className="text-primary">Proposition</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We believe in delivering measurable business value. Our approach combines technological excellence with deep business acumen to ensure your IT investments drive real growth.
              </p>
              
              <div className="hidden lg:block w-32 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
            </div>
          </motion.div>

          <div className="lg:col-span-7 space-y-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <value.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
