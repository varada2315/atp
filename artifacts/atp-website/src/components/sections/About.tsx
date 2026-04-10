import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Globe, Users, Trophy, Target } from "lucide-react";

function Counter({ end, suffix = "", duration = 2 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const stepTime = Math.abs(Math.floor((duration * 1000) / end));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) {
          clearInterval(timer);
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-foreground">
      {count}{suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
              Who We Are
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              Pioneering Enterprise IT for Over 18 Years
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Aditya Technology Partners is a premier IT infrastructure and networking solutions provider. We specialize in designing, deploying, and managing mission-critical technology ecosystems for global enterprises.
              </p>
              <p>
                Our passionate team of experienced professionals works tirelessly to deliver end-to-end solutions that align with global standards. We don't just provide technology; we architect competitive advantages that drive business growth across multiple industries.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <Counter end={18} suffix="+" />
                </div>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Years Experience</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Globe className="w-6 h-6" />
                  </div>
                  <Counter end={12} suffix="+" />
                </div>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Industries Served</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-muted">
              {/* Replace with actual image later, using a solid placeholder with pattern for now */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />
              <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')]" />
              
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="grid grid-cols-2 gap-4 w-full h-full">
                  <div className="space-y-4 pt-12">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 h-40 flex flex-col justify-end">
                      <Target className="w-8 h-8 text-primary mb-2" />
                      <span className="text-white font-medium">Global Standards</span>
                    </div>
                    <div className="bg-primary/90 backdrop-blur-md border border-white/20 rounded-2xl p-6 h-48 flex flex-col justify-end shadow-lg">
                      <Users className="w-8 h-8 text-white mb-2" />
                      <span className="text-white font-medium">Expert Team</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-slate-800/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 h-56 flex flex-col justify-end">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                        <Globe className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-white font-medium text-lg">End-to-End Solutions</span>
                      <p className="text-white/60 text-sm mt-2">From concept to deployment</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 h-32 flex flex-col justify-end">
                      <span className="text-white font-medium">Multi-industry</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
