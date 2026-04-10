import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Expertise-driven solutions tailored to your unique requirements",
  "Customized deployments that scale with your growth",
  "Strong Annual Maintenance Contract (AMC) support",
  "End-to-end execution from consulting to implementation",
  "Proven track record across multiple industry verticals",
  "Agile methodology ensuring timely project delivery"
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            {/* Decorative Image Placeholder */}
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative bg-slate-900 shadow-2xl">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSLCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]" />
              
              <div className="absolute inset-0 flex items-center justify-center p-8 flex-col gap-6 text-center">
                 <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center text-primary backdrop-blur-md border border-primary/30">
                   <span className="text-3xl font-bold tracking-tighter">ATP</span>
                 </div>
                 <h3 className="text-white text-2xl font-bold tracking-tight">Committed to Excellence</h3>
              </div>
              
              {/* Overlay card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-xl">100%</div>
                    <div className="text-white/80 text-sm">Client Satisfaction Focus</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-1/2 -left-12 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              Why Partner With Us?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              We don't just sell hardware and software; we build partnerships. Our holistic approach ensures your infrastructure is not only robust today but ready for tomorrow.
            </p>
            
            <div className="space-y-6">
              {reasons.map((reason, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-primary group-hover:text-white" />
                  </div>
                  <p className="text-foreground font-medium">{reason}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
