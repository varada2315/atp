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
  return (
    <section id="industries" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            Industries We Empower
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Deep domain expertise across diverse sectors, delivering solutions tailored to unique industry challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 group hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                <ind.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{ind.name}</h3>
              <p className="text-muted-foreground text-sm">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
