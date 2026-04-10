import { motion } from "framer-motion";
import { useRef } from "react";
import { Building2, HeartPulse, GraduationCap, Landmark, Truck, Coffee, Home, Ship, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  { name: "IT/ITES", icon: Building2, desc: "High-performance tech parks" },
  { name: "BPO/Contact Centers", icon: Building2, desc: "Always-on voice & data" },
  { name: "Healthcare", icon: HeartPulse, desc: "Mission-critical life systems" },
  { name: "Education", icon: GraduationCap, desc: "Campus-wide connectivity" },
  { name: "Government", icon: Landmark, desc: "Secure public infrastructure" },
  { name: "Manufacturing & Logistics", icon: Truck, desc: "Supply chain automation" },
  { name: "Hospitality", icon: Coffee, desc: "Premium guest experiences" },
  { name: "Real Estate", icon: Home, desc: "Smart gated communities" },
  { name: "Ports & Cargo", icon: Ship, desc: "Rugged outdoor networking" },
];

export function Industries() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="industries" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
              Industries We Empower
            </h2>
            <p className="text-lg text-muted-foreground">
              Deep domain expertise across diverse sectors, delivering solutions tailored to unique industry challenges.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-4 shrink-0"
          >
            <Button variant="outline" size="icon" onClick={() => scroll('left')} className="rounded-full w-12 h-12 border-border hover:bg-muted hover:text-primary">
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => scroll('right')} className="rounded-full w-12 h-12 border-border hover:bg-muted hover:text-primary">
              <ChevronRight className="w-6 h-6" />
            </Button>
          </motion.div>
        </div>

        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {industries.map((ind, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="shrink-0 w-[280px] sm:w-[320px] snap-start"
              >
                <div className="bg-card border border-border rounded-2xl p-8 h-full group hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    <ind.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{ind.name}</h3>
                  <p className="text-muted-foreground text-sm">{ind.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
